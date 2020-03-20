import React, { useState } from "react";
import styles from "./styles";
import { GradientBody, Image, WinningNumbers } from "../../components";
import { formatLottoResult } from "../../lib/formatLottoResult";
import { formatThousandNumber } from "../../lib/formatThousandNumber";

type Props = {
  [key: string]: any;
};

const Result = ({ lottoResult, navigation }: Props) => {
  const [handsUp, setHands] = useState(false);
  const [isResult, setResult] = useState<{}[] | null>(null);

  if (navigation.location.state && lottoResult && !isResult) {
    const lotteryInfo = navigation.location.state.lotteryInfo;

    setResult(formatLottoResult(lotteryInfo, lottoResult));
  }

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

      {lottoResult && (
        <>
          <WinningNumbers lottoResult={lottoResult} />

          <div style={styles.overviewContainer}>
            <p style={styles.containerHeading}>[ Overview ]</p>

            <div style={styles.overviewTableHeader}>
              <div></div>
              <div>Matches</div>
              <div>Tickets Won</div>
              <div>Prize</div>
            </div>

            <div style={styles.overviewTableContentContainer}>
              {isResult &&
                isResult.map((result: { [key: string]: any }, index) => {
                  const isLastChild = index === isResult.length - 1;
                  console.log(result);
                  return (
                    <div
                      key={`tableContentBox_${result.game}`}
                      style={styles.tableContentBox}
                    >
                      <div
                        style={
                          !isLastChild
                            ? styles.contentChild
                            : { ...styles.contentChild, ...styles.lastChild }
                        }
                      >
                        {`${result.game
                          .slice(0, 1)
                          .toUpperCase()}${result.game.slice(
                          1,
                          4
                        )} ${result.game.slice(4, 5)}`}
                      </div>

                      <div
                        style={
                          !isLastChild
                            ? { ...styles.contentChild, ...styles.cellBrown }
                            : {
                                ...styles.contentChild,
                                ...styles.cellBrown,
                                ...styles.lastChild
                              }
                        }
                      >
                        {result.isWin
                          ? result.rank.matches
                          : `${result.result.length}/7`}
                      </div>

                      <div
                        style={
                          !isLastChild
                            ? styles.contentChild
                            : { ...styles.contentChild, ...styles.lastChild }
                        }
                      >
                        {result.isWin
                          ? formatThousandNumber(result.rank.ticketsWon)
                          : "-"}
                      </div>

                      <div
                        style={
                          !isLastChild
                            ? { ...styles.contentChild, ...styles.cellBrown }
                            : {
                                ...styles.contentChild,
                                ...styles.cellBrown,
                                ...styles.lastChild
                              }
                        }
                      >
                        {result.isWin
                          ? `$ ${formatThousandNumber(
                              result.rank.prize.toFixed(2)
                            )}`
                          : "-"}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </GradientBody>
  );
};

export default Result;
