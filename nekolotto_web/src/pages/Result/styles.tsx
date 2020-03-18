import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  logoContainer: {
    position: "relative",
    width: "100vw",
    height: "34vh",
    overflow: "hidden"
  },
  imgCatMark: {
    position: "absolute",
    top: "11.58vh",
    left: "50%",
    transform: "translateX(-50%)",
    width: "auto",
    height: "39.5%"
  },
  imgPodium: {
    position: "absolute",
    top: "2.8vh",
    left: "50%",
    transform: "translateX(-50%)",
    width: "auto",
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
  }
};

export default styles;
