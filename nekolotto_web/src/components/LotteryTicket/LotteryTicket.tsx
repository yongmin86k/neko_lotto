import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Image, LottoGame } from "../../components";

type Props = {
  boxRef: any;
  style?: React.CSSProperties;
};

const LotteryTicket = ({ boxRef, style }: Props) => {
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
        ...style,
        left: offsetLeft!
      }}
    >
      <div style={styles.leftContainer}>
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>[ Select Lottery ]</h2>
          <div style={styles.sectionBox}>
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
          <div style={{ ...styles.sectionBox, ...styles.dateBox }}>
            <p>March 3, 2020</p>

            <Image
              src="/assets/images/calendar.png"
              alt="Select Date"
              style={styles.icon}
            />
          </div>
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
            <LottoGame game="a" />
            <LottoGame game="b" />
            <LottoGame game="c" />
            <LottoGame game="d" />
            <LottoGame game="e" />
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
