import React from "react";

import styles from "./UpdateStatus.module.css";

const UpdateStatus = () => {
  return (
    <div className={styles.main}>
      <div className={styles.completed}>Completed</div>
      <div className={styles.incomplete}>Incomplete</div>
    </div>
  );
};

export default UpdateStatus;
