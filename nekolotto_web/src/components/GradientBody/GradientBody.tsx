import React, { ReactNode, CSSProperties } from "react";
import styles from "./styles";

type GradientBodyProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const GradientBody = (props: GradientBodyProps) => {
  return (
    <section style={{ ...styles.default, ...props.style }}>
      {props.children}
    </section>
  );
};

export default GradientBody;
