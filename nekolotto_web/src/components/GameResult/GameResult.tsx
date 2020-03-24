import React from "react";
import styles from "./styles";
import { Image } from "../../components";

type Props = {
  game: String;
  lottoProps?: { [key: string]: any } | null;
};

const GameResult = ({ game, lottoProps }: Props) => {
  const gameName = `game${game.toUpperCase()}`;
  const maxNumber = Array.from(Array(50).keys());

  const lotteryInfo = lottoProps?.lotteryInfo;
  const drawNbrs = lottoProps?.lottoResult.drawNbrs;
  const bonusNbr = lottoProps?.lottoResult.bonusNbr;

  const gameNumbers = lotteryInfo[gameName];

  return (
    <div style={styles.gameContainer}>
      <div style={styles.numbersContainer}>
        <div style={styles.header}>
          <p style={styles.headerLeftBox}>{game}</p>
          <p style={styles.headerRightBox}>Check and Win</p>
        </div>

        <div style={styles.gameBox}>
          {maxNumber.map(num => {
            const lottoNum = num + 1;

            if (gameNumbers.length === 7) {
              return (
                <div
                  style={styles.number}
                  key={`${game}_resultNum_${lottoNum}`}
                >
                  <p style={styles.numberBefore} />
                  <p style={styles.numberAfter} />
                  <p>{lottoNum}</p>

                  {gameNumbers.find(
                    (number: number) => number === lottoNum
                  ) && (
                    <Image
                      src="/assets/images/ic-toe.png"
                      alt=""
                      style={styles.checkedNum}
                    />
                  )}

                  {drawNbrs.find((number: number) => number === lottoNum) && (
                    <p style={styles.mark} />
                  )}

                  {bonusNbr === lottoNum && (
                    <p style={{ ...styles.mark, ...styles.bonusMark }} />
                  )}
                </div>
              );
            } else {
              return (
                <div
                  style={styles.number}
                  key={`${game}_resultNum_${lottoNum}`}
                >
                  <p style={styles.numberBefore} />
                  <p style={styles.numberAfter} />
                  <p>{lottoNum}</p>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div style={styles.barCodeBox}>
        <p style={styles.barCode} />
        <p style={styles.barCode} />
        <p style={styles.barCode} />
        <p style={styles.barCode} />
        <p style={styles.barCode} />
      </div>
    </div>
  );
};

export default GameResult;
