import React, { useState, useRef } from "react";
import { Form, FormSpy } from "react-final-form";
import {
  GradientBody,
  Image,
  Footer,
  LotteryTicket,
  LottoGame
} from "../../components";
import styles from "./styles";
import { formatLottoNum } from "../../lib/formatLottoNum";

const Main = () => {
  const useRefTicketBox = useRef<HTMLDivElement>(null!);

  const [ticketWidth, setTicketWidth] = useState(null);

  const [isLastNumber, setLastNumber] = useState<{
    [key: string]: number | null;
  }>({
    gameA: null,
    gameB: null,
    gameC: null,
    gameD: null,
    gameE: null
  });

  const CompLottoGame = (game: string) => (
    <LottoGame isLastNumber={isLastNumber} game={game} />
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

                      Object.keys(formatValues).forEach(key => {
                        const gameType = key;
                        const lastNumbers =
                          formatValues[gameType][
                            formatValues[gameType].length - 1
                          ];

                        if (formatValues[gameType].length === 7) {
                          setLastNumber({
                            ...isLastNumber,
                            [gameType]: lastNumbers
                          });
                        }

                        if (
                          formatValues[gameType].length < 7 &&
                          isLastNumber[gameType]
                        ) {
                          setLastNumber({
                            ...isLastNumber,
                            [gameType]: null
                          });
                        }
                      });
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
    </>
  );
};

export default Main;
