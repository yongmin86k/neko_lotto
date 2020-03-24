export const lottoNumChecker = (
  lottoData: { [key: string]: number[] },
  setError: Function,
  setGameError: Function
) => {
  let gameIndex: number = 0;

  const validate = Object.keys(lottoData).some((key, index) => {
    const gameResult = lottoData[key];

    gameIndex = index;

    return gameResult.length > 0 && gameResult.length < 7;
  });

  if (!validate) {
    setError(false);
    setGameError(null);
    return false;
  } else {
    let gameName;

    switch (gameIndex) {
      case 0:
        gameName = "Game A";
        break;
      case 1:
        gameName = "Game B";
        break;
      case 2:
        gameName = "Game C";
        break;
      case 3:
        gameName = "Game D";
        break;
      case 4:
        gameName = "Game E";
        break;
    }

    setGameError(gameName);
    setError(true);
    return true;
  }
};
