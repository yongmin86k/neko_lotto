import React from "react";
import { themes } from "../../config/themes";

const bodyText = {
  listStyle: "decimal",
  fontFamily: "Oswald",
  fontWeight: 300,
  fontSize: themes.fontSize.xs,
  color: themes.color.black,
  lineHeight: 1.4,
  opacity: 0.8
};

const styles: { [key: string]: React.CSSProperties } = {
  lotteryContentContainer: {
    position: "absolute",
    top: 0,
    display: "flex"
  },
  leftContainer: {
    flex: "none",
    width: 147,
    paddingTop: 16
  },
  section: {
    marginBottom: 24
  },
  sectionHeading: {
    padding: `0 12px 0 9px`,
    fontWeight: "bold",
    fontSize: themes.fontSize.sm
  },
  sectionBox: {
    margin: `6px 15px 0 10px`,
    display: "flex",
    alignItems: "center",
    height: 56,
    border: `1px solid ${themes.color.brown}`,
    borderRadius: 2,
    padding: 5,
    paddingRight: 4
  },
  lotteryType: {
    height: 46,
    width: "auto"
  },
  icon: {
    height: 24,
    width: 24
  },
  dateBox: {
    justifyContent: "space-between",
    width: 122,
    height: 26,
    padding: `0 4px 1px 8px`,
    backgroundColor: "unset",
    fontFamily: "Oswald",
    fontSize: themes.fontSize.sm,
    color: themes.color.brown,
    lineHeight: "24px",
    cursor: "pointer"
  },
  listBox: {
    height: "auto"
  },
  ol: {
    marginTop: 4,
    marginLeft: 17,
    marginRight: 12,
    ...bodyText
  },
  ul: {
    marginTop: 14,
    listStyle: "none"
  },
  li: {
    position: "relative",
    marginBottom: 14
  },
  listStyle: {
    position: "absolute",
    left: -7
  },
  rightContainer: {
    flex: 1,
    padding: `16px 19px 0 12px`
  },
  description: {
    marginTop: 4,
    marginLeft: 18,
    ...bodyText
  },
  gameContainer: {
    position: "relative",
    display: "flex",
    marginTop: 16
  },
  rotateText: {
    position: "absolute",
    top: 144,
    right: -146,
    width: 334,
    height: 42,
    fontFamily: "Oswald",
    fontWeight: 300,
    fontSize: themes.fontSize.xs,
    color: themes.color.black,
    lineHeight: 1.4,
    letterSpacing: "-0.05px",
    opacity: 0.8,
    overflow: "visible",
    transform: "rotate(-90deg)"
  }
};

export default styles;
