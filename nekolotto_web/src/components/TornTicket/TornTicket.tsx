import React, { useState } from "react";
import moment from "moment";
import { Image } from "../../components";
import styles from "./styles";

type Props = {
  date: string;
  CompGameResult: Function;
};

const TornTicket = ({ date, CompGameResult }: Props) => {
  const [isWidth, setWidth] = useState<number | null>(null);
  const [isLeft, setLeft] = useState<string>("16px");

  return (
    <div style={styles.container}>
      <div style={styles.scrollableBox}>
        <Image
          style={styles.imgTicket}
          src="/assets/images/lottery-ticket-torn.png"
          alt=""
          onLoad={(e: { [key: string]: HTMLImageElement }) => {
            setWidth(e.target.width);
            setLeft(e.target.style.paddingLeft);
          }}
        />

        <div
          style={{ ...styles.contentBox, width: `${isWidth}px`, left: isLeft }}
        >
          <div style={styles.meta}>
            <h2 style={styles.title}>
              {`[ Result for the draw on ${moment(
                date.split("(")[0],
                "MMM D, YYYY"
              ).format("dddd")} ${date.split("(")[0]} ]`}
            </h2>
            <p style={styles.description}>
              - Scroll right to check more lotto games.
            </p>
          </div>

          <div style={styles.mainContent}>
            {CompGameResult("a")}
            {CompGameResult("b")}
            {CompGameResult("c")}
            {CompGameResult("d")}
            {CompGameResult("e")}

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

export default TornTicket;
