import React, { useState, useRef } from "react";
import { GradientBody, Image, Footer, LotteryTicket } from "../../components";
import styles from "./styles";

const Main = () => {
  const useRefTicketBox = useRef<HTMLDivElement>(null!);
  const [ticketWidth, setTicketWidth] = useState(null);

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

        <div style={styles.mainContainer}>
          <div style={styles.ticketContainer}>
            <div style={styles.ticketBox} ref={useRefTicketBox}>
              <Image
                src="/assets/images/lottery-ticket.png"
                alt=""
                style={styles.ticket}
                onLoad={setTicketWidth}
              />

              <LotteryTicket
                boxRef={useRefTicketBox}
                style={{ width: `${ticketWidth}px` }}
              />
            </div>
          </div>
        </div>
      </GradientBody>

      <Footer />
    </>
  );
};

export default Main;
