import React from "react";
import Container from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";

import Aside from "../../components/Aside/Aside";
import Tasks from "../../components/Tasks/Tasks";

import styles from "./TaskManage.module.css";

const TaskManagePage = () => {
  return (
    <Container>
      <Header />

      <main className={styles["aside-tasks__container"]}>
        <Aside />

        <Tasks />
      </main>
    </Container>
  );
};

export default TaskManagePage;
