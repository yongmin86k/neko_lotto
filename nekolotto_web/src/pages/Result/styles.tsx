import React from "react";
import { themes } from "../../config/themes";

const mixinAlignCenter = {
  left: "50%",
  transform: "translateX(-50%)",
  width: "auto"
};

const mixinTable = {
  display: "grid",
  gridTemplateColumns: "1fr 1.3fr 1.3fr 2fr",
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
