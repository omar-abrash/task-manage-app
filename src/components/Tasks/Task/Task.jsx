import React from "react";

import Chip from "../../UI/Chip/Chip";
import { ReactComponent as DwonIcon } from "../../../assets/icons/Down.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/Delete.svg";

import styles from "./Task.module.css";

const Task = ({ task }) => {
  const { title, categories, status } = task;

  return (
    <li className={styles.task}>
      <div className={styles.details}>
        <h3>{title}</h3>

        <ul className={styles["categories-list"]}>
          {categories.map((category) => (
            <Chip title={category} />
          ))}
        </ul>
      </div>

      <div className={styles.actions}>
        <div
          className={`${styles["task-status"]} ${
            status === "completed" ? styles.completed : styles.incompleted
          }`}
        >
          <span> {status.charAt(0).toUpperCase() + status.slice(1)}</span>
          <DwonIcon />
        </div>

        <EditIcon className={styles["action-icon"]} />
        <DeleteIcon className={styles["action-icon"]} />
      </div>
    </li>
  );
};

export default Task;
