import React, { useState, useRef } from "react";
import { Form, FormSpy } from "react-final-form";
import {
  GradientBody,
  Image,
  Footer,
  LotteryTicket,
  LottoGame,
  WarningOneBtn
} from "../../components";
import styles from "./styles";
import { formatLottoNum } from "../../lib/formatLottoNum";

const Main = () => {
  const useRefTicketBox = useRef<HTMLDivElement>(null!);
  const [ticketWidth, setTicketWidth] = useState(null);

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

                console.log(formatValues);
              }
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <FormSpy
                  subscription={{ values: true }}
                  onChange={({ values }) => {
                    if (values) {
                      const newValue = Object.keys(values).filter(key => {
                        return values[key] === true;
                      });
                      const formatValues = formatLottoNum(newValue);

                      // console.log(isLottoGame);
                    }
                  }}
                />

                <div style={styles.ticketContainer}>
                  <div style={styles.ticketBox} ref={useRefTicketBox}>
                    <Image
                      src="/assets/images/lottery-ticket.png"
                      alt=""
                      style={styles.ticket}
                      onLoad={setTicketWidth}
                    />

                    <LotteryTicket
                      CompLottoGame={CompLottoGame}
                      boxRef={useRefTicketBox}
                      style={{ width: `${ticketWidth}px` }}
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

      <Footer />

      {openModal && <WarningOneBtn toggleModal={toggleModal} />}
    </>
  );
};

export default Main;
