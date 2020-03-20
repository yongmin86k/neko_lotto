import React from "react";
import styles from "./styles";

const WinningNumbers = ({ lottoResult }: { [key: string]: any }) => {
  return (
    <div style={styles.winningNumContainer}>
      <div style={styles.winningNumBox}>
        {lottoResult.drawNbrs.map((number: number, index: number) => {
          if (index === 3) {
            return (
              <p
                key={`winninNumber_${index}`}
                style={{
                  ...styles.winninNumber,
                  ...styles.winninNumberLastChild
                }}
              >
                {number}
              </p>
            );
          }
          if (index < 3) {
            return (
              <p key={`winninNumber_${index}`} style={styles.winninNumber}>
                {number}
              </p>
            );
          }
          return false;
        })}
      </div>

      <div
        style={{
          ...styles.winningNumBox,
          ...styles.winningNumBoxLastChild
        }}
      >
        {lottoResult.drawNbrs.map((number: number, index: number) => {
          if (index > 3) {
            return (
              <p key={`winninNumber_${index}`} style={styles.winninNumber}>
                {number}
              </p>
            );
          }
          return false;
        })}

        <p style={{ ...styles.winninNumber, ...styles.bonusNumber }}>
          {lottoResult.bonusNbr}
          <span style={styles.textBonus}>Bonus</span>
        </p>
      </div>
    </div>
  );
};

export default WinningNumbers;
