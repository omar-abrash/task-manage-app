// this Component for Add and Edit Tasks :
import React, { useState, useId } from "react";

import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";
import Select from "../UI/Select/Select";

import styles from "./TaskForm.module.css";
import Button from "../UI/Button/Button";

const categoresList = ["Category 01", "Category 02", "Category 03"];

const TaskForm = ({ title, closeDialog, afterAddNewTask }) => {
  const taskId = useId();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    name === "task-name" && setTaskName((prev) => value);
    name === "task-desc" && setTaskDescription((prev) => value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!taskName) {
      return;
    }

    const newTask = {
      id: taskId,
      title: taskName,
      description: taskDescription,
      status: "incompleted",
      categories,
    };

    afterAddNewTask(newTask);
    closeDialog();
  };

  return (
    <form className={styles.main} onSubmit={submitHandler}>
      <h3 className={styles.heading}>{title}</h3>

      <Input
        title="Task Name"
        name="task-name"
        id="task-name"
        className={styles["task-name"]}
        required={true}
        value={taskName}
        onChange={inputChangeHandler}
      />

      <TextArea
        title="Task description (optional)"
        name="task-desc"
        id="task-desc"
        className={styles["task-desc"]}
        required={false}
        value={taskDescription}
        onChange={inputChangeHandler}
      />

      <Select options={categoresList} setSelectedOptions={setCategories} />

      <div className={styles["action-btns"]}>
        <Button
          title="Cancel"
          className={styles["cancel-btn"]}
          onClick={closeDialog}
        />

        <Button title="Create" className={styles["create-btn"]} type="submit" />
      </div>
    </form>
  );
};

export default TaskForm;
