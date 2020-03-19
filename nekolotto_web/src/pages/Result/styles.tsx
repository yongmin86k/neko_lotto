import React from "react";
import { themes } from "../../config/themes";

const mixinAlignCenter = {
  left: "50%",
  transform: "translateX(-50%)",
  width: "auto"
};

const mixinTable = {
  display: "grid",
  gridTemplateColumns: "48px 64px 64px 1fr",
  alignItems: "center",
  justifyItems: "center"
};

const styles: { [key: string]: React.CSSProperties } = {
  logoContainer: {
    position: "relative",
    width: "100vw",
    height: "34vh",
    overflow: "hidden"
  },
  imgCatMark: {
    ...mixinAlignCenter,
    position: "absolute",
    top: "11.58vh",
    height: "39.5%"
  },
  imgPodium: {
    ...mixinAlignCenter,
    position: "absolute",
    top: "2.8vh",
    height: "81.86%"
  },
  label: {
    position: "absolute",
    bottom: "1vh",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    height: 28,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 14,
    textAlign: "center",
    whiteSpace: "nowrap",
    backgroundColor: themes.color.brown,
    fontSize: themes.fontSize.sm,
    fontWeight: "bold",
    color: themes.color.yellow,
    boxShadow: `0 4px 4px 0 rgba(194, 143, 20, 0.52)`
  },
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
  },
  overviewContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: "16px 13px 14px 13px",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 24,
    boxShadow: `0 8px 36px 0 #c28f14`
  },
  containerHeading: {
    fontSize: themes.fontSize.sm,
    fontWeight: "bold"
  },
  overviewTableHeader: {
    ...mixinTable,
    marginTop: 6,
    fontFamily: "Oswald",
    fontWeight: 300,
    fontSize: themes.fontSize.xs,
    opacity: 0.8
  },
  overviewTableContentContainer: {
    marginTop: 4,
    border: `1px solid ${themes.color.brown}`,
    borderRadius: 2,
    fontFamily: "Oswald",
    fontSize: themes.fontSize.sm,
    color: themes.color.brown,
    letterSpacing: "-0.18px",
    overflow: "hidden"
  },
  tableContentBox: {
    ...mixinTable
  },
  contentChild: {
    width: "100%",
    height: 28,
    lineHeight: "28px",
    textAlign: "center",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderBottom: `1px solid ${themes.color.brown}`,
    boxSizing: "content-box"
  },
  cellBrown: {
    borderBottom: `1px solid white`,
    backgroundColor: themes.color.brown,
    color: "white"
  },
  lastChild: {
    borderBottom: "unset"
  }
};

export default styles;
