import React from "react";

import Button from "../Button/Button";
import { ReactComponent as CloseIcon } from "../../../assets/icons/Close.svg";

import styles from "./Chip.module.css";

const Chip = ({ title, onClick, removable, onRemove }) => {
  return (
    <div className={styles.chip} onClick={onClick}>
      <span>{title}</span>

      {removable && (
        <Button className={styles["remove-btn"]}>
          <CloseIcon onClick={onRemove} />
        </Button>
      )}
    </div>
  );
};

export default Chip;
