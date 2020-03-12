import React from "react";
import { Field } from "react-final-form";
import { Image } from "../../components";
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
              <Field
                key={`${game}_number_${index}`}
                name={`${game}_number_${index}`}
                type="checkbox"
              >
                {props => {
                  const isChecked = props.input.checked;

                  return !isChecked ? (
                    <label style={styles.number}>
                      <p style={styles.numberBefore} />
                      <p style={styles.numberAfter} />
                      <p>{index + 1}</p>
                      <input
                        {...props.input}
                        type="checkbox"
                        name={`${game}_number_${index}`}
                        value={`${game}_number_${index}`}
                        style={styles.inputCheckbox}
                      />
                    </label>
                  ) : (
                    <label style={styles.number}>
                      <p style={styles.numberBefore} />
                      <p style={styles.numberAfter} />
                      <p>{index + 1}</p>
                      <Image
                        src="/assets/images/ic-toe.png"
                        alt=""
                        style={styles.checkedNum}
                      />
                      <input
                        {...props.input}
                        type="checkbox"
                        name={`${game}_number_${index}`}
                        value={`${game}_number_${index}`}
                        style={styles.inputCheckbox}
                      />
                    </label>
                  );
                }}
              </Field>
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
