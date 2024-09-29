import React from "react";

import styles from "./UpdateStatus.module.css";

const UpdateStatus = ({ id, onUpdateTaskState }) => {
  return (
    <div className={styles.main}>
      <div
        className={styles.completed}
        onClick={() => onUpdateTaskState(id, "completed")}
      >
        Completed
      </div>
      <div
        className={styles.incomplete}
        onClick={() => onUpdateTaskState(id, "incomplete")}
      >
        Incomplete
      </div>
    </div>
  );
};

export default UpdateStatus;
