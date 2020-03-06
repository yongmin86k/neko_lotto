import React, { FunctionComponent } from "react";
import styles from "./styles";

type GradientBodyProps = {
  styles?: Object;
};

const GradientBody: FunctionComponent<GradientBodyProps> = props => {
  return (
    <section style={{ ...styles.default, ...props.styles }}>
      {props.children}
    </section>
  );
};

export default GradientBody;
