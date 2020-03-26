import React, { useState, useRef, useContext } from "react";
import { Form } from "react-final-form";
import {
  DateForm,
  GradientBody,
  Image,
  LotteryTicket,
  LottoGame,
  WarningOneBtn
} from "../../components";
import styles from "./styles";
import { formatLottoNum } from "../../lib/formatLottoNum";
import { lastDrawDay } from "../../lib/lottoDateHelper";
import { lottoNumChecker } from "../../lib/lottoNumChecker";
import { MediaQueryContext } from "../../contexts";

type Props = {
  [key: string]: any;
};

const Main = ({ navigation, contextProps }: Props) => {
  const { windowScreen, device } = useContext(MediaQueryContext);
  const useRefTicketBox = useRef<HTMLDivElement>(null!);
  const [ticketWidth, setTicketWidth] = useState<number | null>(null);
  const [showDateForm, toggleDateForm] = useState(false);
  const [isLottoGame, setLottoGame] = useState<{
    [key: string]: number[];
    gameA: number[];
    gameB: number[];
    gameC: number[];
    gameD: number[];
    gameE: number[];
  }>({
    gameA: [],
    gameB: [],
    gameC: [],
    gameD: [],
    gameE: []
  });
  const [isLastNumber, setLastNumber] = useState<{
    [key: string]: number | null;
  }>({
    gameA: null,
    gameB: null,
    gameC: null,
    gameD: null,
    gameE: null
  });
  const [openModal, toggleModal] = useState(false);
  const [checkDate, setCheckDate] = useState<number>(lastDrawDay);
  const [isError, setError] = useState(false);
  const [isGameError, setGameError] = useState<string | null>(null);

  const CompLottoGame = (game: string) => (
    <LottoGame
      isLottoGame={isLottoGame}
      setLottoGame={setLottoGame}
      isLastNumber={isLastNumber}
      setLastNumber={setLastNumber}
      game={game}
      toggleModal={toggleModal}
    />
  );

  return (
    <>
      <GradientBody
        style={{ position: "relative", minHeight: windowScreen.height - 86 }}
      >
        {device !== "mobile" && <div style={styles.bgTypeBottom} />}

        <div style={styles.logoContainer}>
          <Image
            src="/assets/images/abstract.png"
            alt=""
            style={styles.abstract}
          />

          <Image
            src="/assets/images/logo.png"
            alt="Neko Lotto"
            style={styles.logo}
          />

          <p style={styles.label}>Easiest way to check your lotteries</p>
        </div>

        <div
          style={
            device !== "mobile"
              ? { ...styles.mainContainer, ...styles.desktopMainContainer }
              : styles.mainContainer
          }
        >
          <Form
            onSubmit={values => {
              if (values) {
                const newValue = Object.keys(values).filter(key => {
                  return values[key] === true;
                });

                const formatValues = formatLottoNum(newValue);

                const validate = lottoNumChecker(
                  formatValues,
                  setError,
                  setGameError
                );

                if (validate) {
                  return;
                }

                contextProps.showLoading();

                navigation.history.push("./result", {
                  date: checkDate,
                  lotteryInfo: formatValues
                });
              }
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <div style={styles.ticketContainer}>
                  <div style={styles.ticketBox} ref={useRefTicketBox}>
                    <Image
                      src="/assets/images/lottery-ticket.png"
                      alt=""
                      style={
                        windowScreen.width < 932
                          ? styles.ticket
                          : { ...styles.ticket, ...styles.desktopTicket }
                      }
                      onLoad={(e: any) => {
                        const imageTarget = e.target as HTMLImageElement;
                        setTicketWidth &&
                          setTicketWidth(e.target && imageTarget.width);
                      }}
                    />

                    <LotteryTicket
                      CompLottoGame={CompLottoGame}
                      boxRef={windowScreen.width < 932 && useRefTicketBox}
                      style={
                        windowScreen.width < 932
                          ? { width: `${ticketWidth}px` }
                          : {
                              width: `${ticketWidth}px`,
                              ...styles.lotteryTicket
                            }
                      }
                      checkDate={checkDate}
                      toggleDateForm={toggleDateForm}
                    />
                  </div>
                </div>

                <div style={styles.btnSubmitContinaer}>
                  <button type="submit" style={styles.btnSubmit}>
                    Check
                  </button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </GradientBody>

      {openModal && (
        <WarningOneBtn
          toggleModal={toggleModal}
          warnText="You can only select seven(7) numbers"
        />
      )}

      {isError && (
        <WarningOneBtn
          toggleModal={setError}
          warnText={`Please select seven(7) numbers to check "${isGameError}"`}
        />
      )}

      {showDateForm && (
        <DateForm
          checkDate={checkDate}
          setCheckDate={setCheckDate}
          toggleDateForm={toggleDateForm}
        />
      )}
    </>
  );
};

export default Main;
