import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    position: "relative",
    width: "100vw",
    padding: `24px 12px 16px 12px`,
    backgroundColor: themes.color.black,
    fontSize: themes.fontSize.sm
  },
  ul: {
    display: "flex",
    marginBottom: 24,
    color: themes.color.yellow
  },
  desktopUl: {
    justifyContent: "center"
  },
  li: {
    marginRight: 24
  },
  caption: {
    fontSize: themes.fontSize.xs,
    color: themes.color.grey
  },
  desktopCaption: { textAlign: "center" },
  bgContainer: {
    position: "absolute",
    width: "100vw",
    overflowX: "hidden",
    left: 0
  },
  imgPolyShape: {
    position: "relative",
    display: "block",
    width: "102vw",
    left: "50%",
    transform: "translateX(-50%)"
  }
};

export default styles;
