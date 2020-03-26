import React from "react";
import { themes } from "../../config/themes";

const styles: { [key: string]: React.CSSProperties } = {
  bgTypeBottom: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    backgroundImage: `
      url(/assets/images/bg-01@2x.png), 
      url(/assets/images/bg-02@2x.png),
      url(/assets/images/bg-03@2x.png)`,
    backgroundSize: "1024px, contain, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 10%, bottom, center",
    backgroundAttachment: "fixed"
  },
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
  },
  mainContainer: {
    width: "100vw",
    overflow: "hidden",
    paddingTop: 36,
    paddingBottom: 36
  },
  desktopMainContainer: {
    paddingBottom: 80
  },
  ticketContainer: {
    overflowX: "scroll",
    filter: "drop-shadow(rgba(128, 79, 0, 0.36) 0 8px 24px)"
  },
  ticketBox: {
    position: "relative",
    padding: "0 16px"
  },
  ticket: {
    position: "relative",
    paddingRight: 16,
    paddingBottom: 44,
    margin: "0 auto",
    width: "auto",
    height: 416,
    boxSizing: "content-box"
  },
  lotteryTicket: {
    left: "50%",
    transform: "translate(-50%)"
  },
  desktopTicket: {
    paddingRight: 0
  },
  btnSubmitContinaer: {
    display: "flex",
    justifyContent: "center"
  },
  btnSubmit: {
    width: 148,
    height: 48,
    border: "unset",
    borderRadius: 12,
    backgroundColor: themes.color.scarlet,
    fontSize: themes.fontSize.default,
    fontWeight: "bold",
    color: "white",
    boxShadow: "0 4px 4px 0 rgba(194, 143, 20, 0.52)",
    zIndex: 9999
  }
};

export default styles;
