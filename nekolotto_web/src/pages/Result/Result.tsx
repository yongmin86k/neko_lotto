import React, { useState, useContext } from "react";
import styles from "./styles";
import {
  GradientBody,
  Image,
  WinningNumbers,
  ResultOverview,
  TornTicket,
  GameResult
} from "../../components";
import { formatLottoResult } from "../../lib/formatLottoResult";
import { Link } from "react-router-dom";
import { MediaQueryContext } from "../../contexts";

type Props = {
  [key: string]: any;
};

const Result = ({ lottoResult, navigation }: Props) => {
  const { windowScreen, device } = useContext(MediaQueryContext);
  const [handsUp, setHands] = useState(false);
  const [isResult, setResult] = useState<{}[] | null>(null);
  const [lottoProps, setLottoProps] = useState<{ [key: string]: any } | null>(
    null
  );

  const CompGameResult = (game: string) => (
    <GameResult game={game} lottoProps={lottoProps} />
  );

  if (navigation.location.state && lottoResult && !isResult) {
    const lotteryInfo = navigation.location.state.lotteryInfo;

    setResult(formatLottoResult(lotteryInfo, lottoResult));

    setLottoProps({ lotteryInfo, lottoResult });
  }

  return (
    <GradientBody
      style={{ ...styles.mainContainer, minHeight: windowScreen.height - 86 }}
    >
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

      {lottoResult && (
        <>
          <WinningNumbers lottoResult={lottoResult} />

          <ResultOverview isResult={isResult} />

          <TornTicket
            date={
              lottoResult
                ? `${lottoResult.drawDate} (No. ${lottoResult.drawNbr})`
                : "Loading"
            }
            CompGameResult={CompGameResult}
          />
        </>
      )}

      <Link to="/" style={styles.link}>
        <button style={styles.btnCheckAgain} type="button">
          Check again
        </button>
      </Link>
    </GradientBody>
  );
};

export default Result;
