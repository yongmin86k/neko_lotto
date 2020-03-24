import React from "react";
import { themes } from "../../config/themes";

const borderStyle = {
  width: "100%",
  height: 3,
  border: `1px solid ${themes.color.brown}`,
  left: 0
};

const markStyle = {
  width: 22,
  height: 22,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 11
};

const styles: { [key: string]: React.CSSProperties } = {
  gameContainer: {
    width: 124,
    marginRight: 12
  },
  numbersContainer: {
    fontFamily: "Oswald",
    fontSize: themes.fontSize.sm,
    color: themes.color.brown,
    border: `1px solid ${themes.color.brown}`,
    borderRadius: 2
  },
  header: {
    display: "flex",
    height: 26,
    textAlign: "center",
    lineHeight: "25px",
    borderBottom: `1px solid ${themes.color.brown}`,
    whiteSpace: "nowrap",
    letterSpacing: -0.18
  },
  headerLeftBox: {
    flex: "none",
    width: 28,
    textTransform: "uppercase"
  },
  headerRightBox: {
    flex: 1,
    backgroundColor: themes.color.brown,
    color: "white"
  },

  gameBox: {
    padding: 8,
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateRows: "repeat(10, 1fr)",
    gridGap: "9px 12px",
    justifyItems: "center",
    alignItems: "center"
  },
  number: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 12,
    height: 21,
    padding: 0,
    paddingBottom: 0.5,
    fontFamily: "Oswald",
    fontSize: themes.fontSize.xs,
    whiteSpace: "nowrap",
    letterSpacing: -0.18,
    color: themes.color.brown,
    border: "none",
    backgroundColor: "transparent"
  },
  numberBefore: {
    position: "absolute",
    ...borderStyle,
    top: 0,
    borderBottom: "none"
  },
  numberAfter: {
    position: "absolute",
    ...borderStyle,
    bottom: 0,
    borderTop: "none"
  },
  checkedNum: {
    position: "absolute",
    width: 16,
    height: 16,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    mixBlendMode: "multiply"
  },
  mark: {
    position: "absolute",
    ...markStyle,
    mixBlendMode: "multiply",
    border: `solid 2px ${themes.color.red}`,
    backgroundColor: "rgba(208, 2, 27, 0.1)"
  },
  bonusMark: {
    borderColor: themes.color.yellow,
    backgroundColor: "rgba(255, 181, 0, 0.1)"
  },

  barCodeBox: {
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    padding: "0 2px",
    height: 19
  },
  barCode: {
    width: 4,
    height: 10,
    backgroundColor: themes.color.black
  }
};

export default styles;
