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
  contentBox: {
    position: "absolute",
    top: 0,
    padding: "16px 0 0 13px"
  },
  title: {
    fontWeight: "bold",
    fontSize: themes.fontSize.sm
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
  }
};

export default styles;
