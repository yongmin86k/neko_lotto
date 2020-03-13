import { AnyObject } from "final-form";

export const formatLottoNum = (numArr: AnyObject) => {
  const gameObj = numArr.reduce(
    (acc: AnyObject, cur: string) => {
      const gameType = `game${cur.slice(0, 1).toUpperCase()}`;
      const lottoNumber = parseInt(cur.split("_")[2]);

      return { ...acc, [gameType]: [...acc[gameType], lottoNumber] };
    },
    { gameA: [], gameB: [], gameC: [], gameD: [], gameE: [] }
  );

  return gameObj;
};
