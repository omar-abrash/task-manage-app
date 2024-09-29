import React from "react";

import Button from "../UI/Button/Button";
import { ReactComponent as AddIcon } from "../../assets/icons/Add.svg";

import styles from "./Header.module.css";

const Header = ({ setOpenAddDialog }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Task Management</h1>

      <Button
        className={styles["add-task__btn"]}
        onClick={() => setOpenAddDialog(true)}
      >
        <AddIcon />
        <span className={styles["btn-title"]}>New Task</span>
      </Button>
    </div>
  );
};

// use React.memo to optimize header correctlly :
export default React.memo(Header);
