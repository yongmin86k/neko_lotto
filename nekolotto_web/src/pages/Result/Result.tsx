import React, { useState } from "react";
import styles from "./styles";
import { GradientBody, Image } from "../../components";

type Props = {
  [key: string]: any;
};

const Result = ({ lottoResult }: Props) => {
  const [handsUp, setHands] = useState(false);

  console.log(lottoResult);

  return (
    <GradientBody>
      <div style={styles.logoContainer}>
        {handsUp ? (
          <Image
            style={styles.imgCatMark}
            src="/assets/images/img-catmark-01-hover.png"
            alt=""
          />
        ) : (
          <Image
            style={styles.imgCatMark}
            src="/assets/images/img-catmark-01.png"
            alt=""
          />
        )}

        <Image
          style={styles.imgPodium}
          src="/assets/images/win-podium.png"
          alt="Result"
          onClick={() => {
            setHands(!handsUp);
          }}
        />

        <p style={styles.label}>
          {lottoResult
            ? `${lottoResult.drawDate} (No. ${lottoResult.drawNbr})`
            : "Loading"}
        </p>
      </div>
    </GradientBody>
  );
};

export default Result;
