import React, { useEffect, useState, CSSProperties } from "react";
import moment from "moment";
import styles from "./styles";
import { Image } from "../../components";

type Props = {
  CompLottoGame: Function;
  boxRef: any;
  style?: CSSProperties;
  checkDate: number;
  toggleDateForm: Function;
};

const LotteryTicket = ({
  boxRef,
  style,
  CompLottoGame,
  checkDate,
  toggleDateForm
}: Props) => {
  const [offsetLeft, setLeft] = useState(null);

  useEffect(() => {
    if (boxRef.current) {
      setLeft(boxRef.current.style.paddingLeft);
    }
  }, [boxRef]);

  return (
    <div
      style={{
        ...styles.lotteryContentContainer,
        left: offsetLeft!,
        ...style
      }}
    >
      <div style={styles.leftContainer}>
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>[ Select Lottery ]</h2>
          <div
            style={styles.sectionBox}
            onClick={() => {
              alert(
                "Sorry for the limited service.\n\nOnly Lotto Max is available to check.\nWe will work for more Lottery results as soon as possible.\nThanks advance for your understanding."
              );
            }}
          >
            <Image
              src="/assets/images/lotto-max.jpg"
              alt="Lotto Max"
              style={styles.lotteryType}
            />
            <Image
              src="/assets/images/arrow-down.png"
              alt="Select Lotteries"
              style={styles.icon}
            />
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>[ Select Draw Date ]</h2>
          <button
            type="button"
            style={{ ...styles.sectionBox, ...styles.dateBox }}
            onClick={() => {
              toggleDateForm(true);
            }}
          >
            <p style={styles.datePara}>
              {moment(checkDate).format("MMMM D, YYYY")}
            </p>

            <Image
              src="/assets/images/calendar.png"
              alt="Select Date"
              style={styles.icon}
            />
          </button>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>[ Instructions ]</h2>
          <div style={styles.listBox}>
            <ol style={styles.ol}>
              <li style={styles.li}>
                Select the draw date you like to check for your Lotto Max
                tickets.
              </li>

              <li>Check the same numbers you’ve checked on your ticket.</li>
            </ol>

            <ul style={{ ...styles.ol, ...styles.ul }}>
              <li style={styles.li}>
                <span style={styles.listStyle}>*</span>
                Click the arrow at the top and choose another lotteries to check
                winning numbers.
              </li>
              <li style={styles.li}>
                <span style={styles.listStyle}>*</span>
                You cannot buy the tickets from Neko Lotto website.
              </li>
              <li style={styles.li}>
                <span style={styles.listStyle}>*</span>You must be 19+ to play.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={styles.rightContainer}>
        <div>
          <h2 style={styles.sectionHeading}>[ Select Winning Numbers ]</h2>
          <p style={styles.description}>
            Scroll right to check more lotto games.
          </p>

          <div style={styles.gameContainer}>
            {CompLottoGame("a")}
            {CompLottoGame("b")}
            {CompLottoGame("c")}
            {CompLottoGame("d")}
            {CompLottoGame("e")}

            <p style={styles.rotateText}>
              You need luck every second of your life, you don’t have to rely on
              it, but you have to have it, because if you don’t have luck, your
              life is just black and white, but luck brings in every other
              colour in your life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryTicket;
