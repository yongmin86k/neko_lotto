import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100vw",
    overflow: "hidden"
  },
  scrollableBox: {
    position: "relative",
    overflowX: "scroll",
    filter: "drop-shadow(rgba(128, 79, 0, 0.36) 0 8px 24px)",
    marginTop: 24
  },
  imgTicket: {
    padding: "0 16px 44px 16px",
    boxSizing: "content-box"
  },
  desktopImgTicket: {
    margin: "0 auto"
  },
  contentBox: {
    position: "absolute",
    top: 0,
    padding: "16px 0 0 13px"
  },
  desktopContentBox: {
    left: "50%",
    transform: "translateX(-50%)"
  },
  title: {
    fontSize: themes.fontSize.sm,
    fontWeight: "bold"
  },
  description: {
    marginTop: 4,
    marginLeft: 1,
    listStyle: "decimal",
    fontFamily: "Oswald",
    fontWeight: 300,
    fontSize: themes.fontSize.xs,
    color: themes.color.black,
    lineHeight: 1.4,
    opacity: 0.8
  },
  mainContent: {
    position: "relative",
    display: "flex",
    marginTop: 16
  },
  rotateText: {
    position: "absolute",
    top: 144,
    right: -126,
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
