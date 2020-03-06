import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  logoContainer: {
    position: "relative",
    width: "100vw",
    height: "34vh",
    overflow: "hidden"
  },
  abstract: {
    position: "absolute",
    top: "0.2vh",
    left: "50%",
    height: "125.37%",
    width: "auto",
    transform: "translateX(-50%)"
  },
  logo: {
    top: "6.3vh",
    height: "67.16%",
    width: "auto",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
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
