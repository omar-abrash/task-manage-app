import React from "react";

import Button from "../Button/Button";
import { ReactComponent as CloseIcon } from "../../../assets/icons/Close.svg";

import styles from "./Chip.module.css";

const Chip = ({ title, removable }) => {
  return (
    <div className={styles.chip}>
      <span>{title}</span>

      {removable && (
        <Button className={styles["remove-btn"]}>
          <CloseIcon />
        </Button>
      )}
    </div>
  );
};

export default Chip;
