import React from "react";
import { createPortal } from "react-dom";

import styles from "./Dialog.module.css";

const Dialog = ({ children, className, onClose }) => {
  // open new portal to make Dialog to Prevent Div soop !
  const modalPortal = createPortal(
    <div className={styles.dilaog}>
      <div className={styles.layer} onClick={onClose}></div>
      <div className={`${styles["over-layer"]} ${className}`}>{children}</div>
    </div>,
    document.getElementById("modal")
  );

  return modalPortal;
};

export default Dialog;
