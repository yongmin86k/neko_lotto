import React from "react";
import styles from "./styles";

type Props = {
  game: string;
};

const LottoGame = ({ game }: Props) => {
  const maxNumber = Array.from(Array(50).keys());

  return (
    <div style={styles.gameContainer}>
      <div style={styles.numbersContainer}>
        <div style={styles.header}>
          <p style={styles.headerLeftBox}>{game}</p>
          <p style={styles.headerRightBox}>Check and Win</p>
        </div>

        <div style={styles.gameBox}>
          {maxNumber.map((_, index) => {
            return (
              <button
                id={`${game}_number_${index}`}
                key={`${game}_number_${index}`}
                style={styles.number}
              >
                <p style={styles.numberBefore} />
                {index + 1}
                <p style={styles.numberAfter} />
              </button>
            );
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

export default LottoGame;
