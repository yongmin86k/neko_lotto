import React, { useState, useRef } from "react";
import { Form, FormSpy } from "react-final-form";
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

type Props = {
  [key: string]: any;
};

const Main = ({ navigation, contextProps }: Props) => {
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
      <GradientBody>
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

        <div style={styles.mainContainer}>
          <Form
            onSubmit={values => {
              if (values) {
                const newValue = Object.keys(values).filter(key => {
                  return values[key] === true;
                });

                const formatValues = formatLottoNum(newValue);

                // console.log(formatValues);
                contextProps.showLoading();

                navigation.history.push("./result", []);
              }
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <FormSpy
                  subscription={{ values: true }}
                  onChange={({ values }) => {
                    // console.log(isLottoGame);
                  }}
                />

                <div style={styles.ticketContainer}>
                  <div style={styles.ticketBox} ref={useRefTicketBox}>
                    <Image
                      src="/assets/images/lottery-ticket.png"
                      alt=""
                      style={styles.ticket}
                      onLoad={(e: any) => {
                        const imageTarget = e.target as HTMLImageElement;
                        setTicketWidth &&
                          setTicketWidth(e.target && imageTarget.width);
                      }}
                    />

                    <LotteryTicket
                      CompLottoGame={CompLottoGame}
                      boxRef={useRefTicketBox}
                      style={{ width: `${ticketWidth}px` }}
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

      {openModal && <WarningOneBtn toggleModal={toggleModal} />}
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
