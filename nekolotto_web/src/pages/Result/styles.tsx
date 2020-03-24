import React from "react";
import { themes } from "../../config/themes";

const mixinAlignCenter = {
  left: "50%",
  transform: "translateX(-50%)",
  width: "auto"
};

const styles: { [key: string]: React.CSSProperties } = {
  mainContainer: {
    paddingBottom: 36
  },
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
  link: {
    position: "relative",
    display: "inline-block",
    left: "50%",
    transform: "translateX(-50%)"
  },
  btnCheckAgain: {
    width: 148,
    height: 48,
    border: "unset",
    borderRadius: 12,
    backgroundColor: themes.color.scarlet,
    fontSize: themes.fontSize.default,
    fontWeight: "bold",
    color: "white",
    boxShadow: "0 4px 4px 0 rgba(194, 143, 20, 0.52)",
    textDecoration: "none"
  }
};

export default styles;
