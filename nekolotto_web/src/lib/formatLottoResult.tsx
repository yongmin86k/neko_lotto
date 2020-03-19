export const formatLottoResult = (
  lotteryInfo: { [key: string]: any },
  lottoResult: { [key: string]: any }
) => {
  const checkGames = Object.keys(lotteryInfo).filter(game => {
    return lotteryInfo[game].length === 7;
  });

  const winnerInfo = () => {
    const infoObj: { [key: string]: any } = {};

    for (let i = 0; i < 9; i++) {
      const rankName = `rank${i + 1}`;

      infoObj[rankName] = {
        matches: lottoResult.gameBreakdown[i].desc,
        ticketsWon: lottoResult.gameBreakdown[i].winnersTotal,
        prize: lottoResult.gameBreakdown[i].prizeAmount
      };
    }

    return infoObj;
  };

  const gameResult = checkGames.map(game => {
    const originalGame = lotteryInfo[game];
    const winNums = lottoResult.drawNbrs;
    const bonusNum = lottoResult.bonusNbr;

    const matches = originalGame.filter((originalNum: number) => {
      const matchNumber = winNums.find((winningNumber: number) => {
        return winningNumber === originalNum;
      });

      return matchNumber;
    });

    let isWin = false;
    let rank, matchBonus;

    if (matches.length > 2) {
      matchBonus = originalGame.find((number: number) => number === bonusNum);
      isWin = true;
    }

    switch (matches.length) {
      case 7: {
        rank = winnerInfo().rank1;
        break;
      }
      case 6: {
        if (matchBonus) {
          rank = winnerInfo().rank2;
        } else {
          rank = winnerInfo().rank3;
        }
        break;
      }
      case 5: {
        if (matchBonus) {
          rank = winnerInfo().rank4;
        } else {
          rank = winnerInfo().rank5;
        }
        break;
      }
      case 4: {
        if (matchBonus) {
          rank = winnerInfo().rank6;
        } else {
          rank = winnerInfo().rank7;
        }
        break;
      }
      case 3: {
        if (matchBonus) {
          rank = winnerInfo().rank8;
        } else {
          rank = winnerInfo().rank9;
        }
        break;
      }
    }

    if (matchBonus) {
      return { isWin, rank, game, result: matches, bonus: true };
    }

    return { isWin, rank, game, result: matches };
  });

  return gameResult;
};
