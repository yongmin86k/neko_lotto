import React from "react";
import { formatThousandNumber } from "../../lib/formatThousandNumber";
import styles from "./styles";

const ResultOverview = ({ isResult }: { [key: string]: any }) => {
  return (
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
          isResult.map((result: { [key: string]: any }, index: number) => {
            const isLastChild = index === isResult.length - 1;

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
                  {`${result.game.slice(0, 1).toUpperCase()}${result.game.slice(
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
                    ? `$ ${formatThousandNumber(result.rank.prize.toFixed(2))}`
                    : "-"}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ResultOverview;
