import React, { useRef } from "react";
import { Field, AnyObject } from "react-final-form";
import { Image } from "../../components";
import styles from "./styles";

type Props = {
  isLottoGame: AnyObject;
  setLottoGame: Function;
  isLastNumber: AnyObject;
  setLastNumber: Function;
  game: string;
  toggleModal: Function;
};

const LottoGame = ({
  game,
  isLottoGame,
  setLottoGame,
  isLastNumber,
  setLastNumber,
  toggleModal
}: Props) => {
  const maxNumber = Array.from(Array(50).keys());
  const refCheckBox = useRef<HTMLInputElement>(null!);
  const order = [
    1,
    11,
    21,
    31,
    41,
    2,
    12,
    22,
    32,
    42,
    3,
    13,
    23,
    33,
    43,
    4,
    14,
    24,
    34,
    44,
    5,
    15,
    25,
    35,
    45,
    6,
    16,
    26,
    36,
    46,
    7,
    17,
    27,
    37,
    47,
    8,
    18,
    28,
    38,
    48,
    9,
    19,
    29,
    39,
    49,
    10,
    20,
    30,
    40,
    50
  ];

  return (
    <div style={styles.gameContainer}>
      <div style={styles.numbersContainer}>
        <div style={styles.header}>
          <p style={styles.headerLeftBox}>{game}</p>
          <p style={styles.headerRightBox}>Check and Win</p>
        </div>

        <div style={styles.gameBox}>
          {maxNumber.map((_, index) => {
            const lottoNumber = order[index];
            const curNumber = `${game}_number_${lottoNumber}`;

            return (
              <Field key={curNumber} name={curNumber} type="checkbox">
                {props => {
                  const isChecked = props.input.checked;

                  return (
                    <label
                      style={styles.number}
                      onClick={e => {
                        const gameType = `game${game.toUpperCase()}`;
                        const curGameState = isLottoGame[gameType];

                        if (isLastNumber[gameType] && !isChecked) {
                          e.preventDefault();
                          toggleModal(true);
                        }

                        if (!isChecked && curGameState.length === 7) {
                          e.preventDefault();

                          setLastNumber({
                            ...isLastNumber,
                            [gameType]: lottoNumber
                          });
                          return;
                        }

                        if (
                          !isChecked &&
                          curGameState[curGameState.length - 1] !== lottoNumber
                        ) {
                          const newLottoGame = {
                            ...isLottoGame
                          };

                          newLottoGame[gameType].push(lottoNumber);
                          setLottoGame(newLottoGame);
                        }

                        if (isChecked) {
                          const newGameNumbers = curGameState.filter(
                            (num: number) => {
                              return num !== lottoNumber;
                            }
                          );

                          const newLottoGame = {
                            ...isLottoGame,
                            [gameType]: newGameNumbers
                          };

                          setLottoGame(newLottoGame);
                          setLastNumber({ ...isLastNumber, [gameType]: null });
                        }
                      }}
                    >
                      <p style={styles.numberBefore} />
                      <p style={styles.numberAfter} />
                      <p>{lottoNumber}</p>
                      {isChecked && (
                        <Image
                          src="/assets/images/ic-toe.png"
                          alt=""
                          style={styles.checkedNum}
                        />
                      )}
                      <input
                        {...props.input}
                        type="checkbox"
                        name={curNumber}
                        value={curNumber}
                        style={styles.inputCheckbox}
                        ref={refCheckBox}
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
