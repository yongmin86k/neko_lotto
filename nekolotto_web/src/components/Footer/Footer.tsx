import React from "react";
import styles from "./styles";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <ul style={styles.ul}>
        <li style={styles.li}>Privacy Policy</li>
        <li>Terms of conditions</li>
      </ul>
      <p style={styles.caption}>Copyright 2020 ©Yongmin Kim</p>
    </footer>
  );
};

export default Footer;
