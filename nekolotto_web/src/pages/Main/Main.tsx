import React from "react";
import { GradientBody, Image, Footer } from "../../components";
import styles from "./styles";

const Main = () => {
  return (
    <>
      <GradientBody>
        <div style={styles.logoContainer}>
          <Image
            src="/assets/images/abstract.png"
            alt=""
            style={styles.abstract}
          />

          <Image
            src="/assets/images/logo.png"
            alt="Neko Lotto"
            style={styles.logo}
          />

          <p style={styles.label}>Easiest way to check your lotteries</p>
        </div>
      </GradientBody>
      <Footer />
    </>
  );
};

export default Main;
