import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  modal: {
    ...themes.modalBg,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "64.8%",
    padding: "16px 14px",
    borderRadius: 12,
    backgroundColor: "white"
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
    border: `solid 2px ${themes.color.yellow}`,
    marginBottom: 8
  },
  icon: {
    width: 36,
    height: 36
  },
  text: {
    fontSize: themes.fontSize.default,
    textAlign: "center",
    lineHeight: 1.5,
    letterSpacing: "-0.24px",
    marginBottom: 16
  },
  btn: {
    width: "50%",
    height: 36,
    borderRadius: 6,
    border: `solid 1px ${themes.color.blue}`,
    fontSize: themes.fontSize.sm,
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: "36px",
    color: themes.color.blue,
    backgroundColor: "white"
  }
};

export default styles;
