// this Component for Add and Edit Tasks :
import React, { useState, useEffect, useId } from "react";

import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";
import Select from "../UI/Select/Select";

import styles from "./TaskForm.module.css";
import Button from "../UI/Button/Button";

const categoresList = ["Category 01", "Category 02", "Category 03"];

const TaskForm = ({
  title,
  closeDialog,
  afterAddNewTask,
  task,
  afterEditTask,
}) => {
  const taskId = useId();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [categories, setCategories] = useState([]);

  // check if this Normal Add Or Edit Form
  const isEditForm = title === "Edit Task";

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

    if (!isEditForm) {
      const newTask = {
        id: taskId,
        title: taskName,
        description: taskDescription,
        status: "incompleted",
        categories,
      };
      afterAddNewTask(newTask);
      closeDialog();
    } else {
      const editTask = {
        id: task.id,
        title: taskName,
        description: taskDescription,
        status: "incompleted",
        categories,
      };

      afterEditTask(editTask);
      closeDialog();
    }
  };

  useEffect(() => {
    if (isEditForm) {
      setTaskName((prev) => task.title);
      setTaskDescription((prev) => task.description);
      setCategories((prev) => task.categories);
    }
  }, [task, isEditForm]);

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

      <Select
        options={categoresList}
        selectedOptions={categories}
        setSelectedOptions={setCategories}
      />

      <div className={styles["action-btns"]}>
        <Button
          title="Cancel"
          className={styles["cancel-btn"]}
          onClick={closeDialog}
        />

        <Button
          title={isEditForm ? "Save Changes" : "Create"}
          className={styles["create-btn"]}
          type="submit"
        />
      </div>
    </form>
  );
};

export default TaskForm;
