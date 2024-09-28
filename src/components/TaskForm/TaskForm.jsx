// this Component for Add and Edit Tasks :
import React from "react";

import Input from "../UI/Input/Input";

import styles from "./TaskForm.module.css";

const TaskForm = ({ title }) => {
  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <h3 className={styles.heading}>{title}</h3>

      <Input
        title="Task Name"
        className={styles["task-name"]}
        required={true}
      />
    </form>
  );
};

export default TaskForm;
