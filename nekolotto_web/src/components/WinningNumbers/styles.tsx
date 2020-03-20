import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  winningNumContainer: {
    marginTop: 8,
    padding: `0 16px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  winningNumBox: {
    display: "flex",
    marginBottom: 10
  },
  winningNumBoxLastChild: {
    marginBottom: 40
  },
  winninNumber: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    marginRight: 6,
    paddingTop: 2,
    borderRadius: 10,
    boxShadow: `0 4px 4px 0 rgba(194, 143, 20, 0.52)`,
    border: `solid 3px ${themes.color.black}`,
    fontSize: themes.fontSize.title,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    color: themes.color.black,
    backgroundColor: themes.color.yellow
  },
  winninNumberLastChild: {
    marginRight: 0
  },
  bonusNumber: {
    borderColor: themes.color.brown,
    color: themes.color.brown,
    marginRight: 0
  },
  textBonus: {
    position: "absolute",
    display: "block",
    bottom: -16,
    fontSize: themes.fontSize.xs,
    fontWeight: "bold",
    color: themes.color.black,
    textTransform: "uppercase"
  }
};

export default styles;
