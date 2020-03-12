import React from "react";
import { themes } from "../../config/themes";

const borderStyle = {
  width: "100%",
  height: 3,
  border: `1px solid ${themes.color.brown}`,
  left: 0
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
    gridTemplateColumns: "repeat(5, 1fr)",
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
    cursor: "pointer",
    backgroundColor: "transparent"
  },
  inputCheckbox: {
    display: "none"
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
  },
  checkedNum: {
    position: "absolute",
    width: 16,
    height: 16,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    mixBlendMode: "multiply"
  }
};

export default styles;
