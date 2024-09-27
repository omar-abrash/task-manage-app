import React from "react";

import Button from "../UI/Button/Button";
import { ReactComponent as AddIcon } from "../../assets/icons/Add.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Task Management</h1>

      <Button className={styles["add-task__btn"]}>
        <AddIcon />
        <span className={styles["btn-title"]}>New Task</span>
      </Button>
    </div>
  );
};

export default Header;
