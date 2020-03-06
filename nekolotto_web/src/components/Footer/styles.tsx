import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
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
  li: {
    marginRight: 24
  },
  caption: {
    fontSize: themes.fontSize.xm,
    color: themes.color.grey
  }
};

export default styles;
