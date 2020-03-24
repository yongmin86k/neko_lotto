import React from "react";
import { Image } from "../../components";
import styles from "./styles";

type Props = {
  toggleModal: Function;
  warnText: string;
};

const WarningOneBtn = ({ toggleModal, warnText }: Props) => {
  return (
    <div
      id="ScreenModal"
      style={styles.modal}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLDivElement).id === "ScreenModal") {
          toggleModal(false);
        }

        e.preventDefault();
      }}
    >
      <div style={styles.container}>
        <div style={styles.iconBox}>
          <Image style={styles.icon} src="/assets/images/warning.png" alt="" />
        </div>

        <p style={styles.text}>{warnText}</p>

        <button
          style={styles.btn}
          type="button"
          onClick={_ => {
            toggleModal(false);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default WarningOneBtn;
