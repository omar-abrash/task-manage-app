import React, { useState } from "react";

import Chip from "../../UI/Chip/Chip";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import Dialog from "../../UI/Dialog/Dialog";
import TaskForm from "../../TaskForm/TaskForm";
import DeleteTask from "../../DeleteTask/DeleteTask";
import { ReactComponent as DwonIcon } from "../../../assets/icons/Down.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/Delete.svg";

import styles from "./Task.module.css";

const Task = ({ task, onUpdateTaskState, afterEditTask, onDeleteTask }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  // destruct task to easy use :
  const { title, categories, description, status } = task;
  console.log("task");
  return (
    <>
      {openEditDialog && (
        <Dialog onClose={() => setOpenEditDialog(false)}>
          <TaskForm
            title="Edit Task"
            closeDialog={() => setOpenEditDialog(false)}
            task={task}
            afterEditTask={afterEditTask}
          />
        </Dialog>
      )}

      {openDeleteDialog && (
        <Dialog
          className={styles["delete-dialog"]}
          onClose={() => setOpenDeleteDialog(false)}
        >
          <DeleteTask
            id={task.id}
            title={task.title}
            closeDialog={() => setOpenDeleteDialog(false)}
            onDeleteTask={onDeleteTask}
          />
        </Dialog>
      )}

      <li className={styles.task}>
        <div className={styles.details}>
          <h3 className={styles["heading"]} title={description}>
            {title}
          </h3>

          <ul className={styles["categories-list"]}>
            {categories.map((category) => (
              <Chip title={category} key={category} />
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <div className={styles["status-actions__container"]}>
            <div
              className={`${styles["task-status"]} ${
                status === "completed" ? styles.completed : styles.incompleted
              }`}
            >
              <span> {status.charAt(0).toUpperCase() + status.slice(1)}</span>
              <DwonIcon />
            </div>

            <div className={styles["drop-down"]}>
              <UpdateStatus
                id={task.id}
                onUpdateTaskState={onUpdateTaskState}
              />
            </div>
          </div>

          <EditIcon
            className={styles["action-icon"]}
            onClick={() => setOpenEditDialog(true)}
          />
          <DeleteIcon
            className={styles["action-icon"]}
            onClick={() => setOpenDeleteDialog(true)}
          />
        </div>
      </li>
    </>
  );
};

export default Task;
