import React, { useState, useContext } from "react";
import styles from "./styles";
import { MediaQueryContext } from "../../contexts";

const Footer = () => {
  const { device } = useContext(MediaQueryContext);

  const [bottomOffset, setBottomOffset] = useState(0);

  return (
    <footer
      style={styles.footer}
      onLoad={(e: any) => {
        setBottomOffset(e.currentTarget.clientHeight);
      }}
    >
      {device !== "mobile" && (
        <div style={{ ...styles.bgContainer, bottom: `${bottomOffset - 1}px` }}>
          <img
            style={styles.imgPolyShape}
            src="/assets/images/bg-abstrack-footer.svg"
            alt=""
          />
        </div>
      )}
      <ul
        style={
          device !== "mobile"
            ? { ...styles.ul, ...styles.desktopUl }
            : styles.ul
        }
      >
        <li style={styles.li}>Privacy Policy</li>
        <li>Terms of conditions</li>
      </ul>
      <p
        style={
          device !== "mobile"
            ? { ...styles.caption, ...styles.desktopCaption }
            : styles.caption
        }
      >
        Copyright 2020 ©Yongmin Kim
      </p>
    </footer>
  );
};

export default Footer;
