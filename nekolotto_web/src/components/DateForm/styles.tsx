import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  modal: {
    ...themes.modalBg,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  }
};

export default styles;
