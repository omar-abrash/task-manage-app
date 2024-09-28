import React from "react";

import DeleteImage from "../../assets/images/delete.png";
import Button from "../UI/Button/Button";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-action.svg";

import styles from "./DeleteTask.module.css";

const DeleteTask = ({ id, title, closeDialog, onDeleteTask }) => {
  return (
    <div>
      <div className={styles["image-part"]}>
        <img src={DeleteImage} alt="delete-img" />
      </div>

      <div className={styles["actions-part"]}>
        <h3 className={styles.heading}>Delete Task!</h3>
        <p>
          Are you sure that you want to delete{" "}
          <span className={styles.title}>[{title}]</span> ?
        </p>

        <div className={styles["action-btns"]}>
          <Button
            title="Cancel"
            className={styles["cancel-btn"]}
            onClick={closeDialog}
          />

          <Button
            className={styles["delete-btn"]}
            onClick={() => onDeleteTask(id)}
          >
            <DeleteIcon />
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
