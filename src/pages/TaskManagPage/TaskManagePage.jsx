import React, { useState, useEffect } from "react";
import Container from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";

import Aside from "../../components/Aside/Aside";
import Tasks from "../../components/Tasks/Tasks";
import Dialog from "../../components/UI/Dialog/Dialog";
import TaskForm from "../../components/TaskForm/TaskForm";

import styles from "./TaskManage.module.css";

const dummyTasks = [
  {
    id: 1,
    title: "task one",
    description: "task one is amaizing",
    categories: ["Category 01", "Category 02", "Category 03"],
    status: "completed",
  },
  {
    id: 2,
    title: "task two",
    description: "task two is good",
    categories: ["Category 01", "Category 02"],
    status: "incompleted",
  },
];

const TaskManagePage = () => {
  const [tasks, setTasks] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  // first fetch
  useEffect(() => {
    setTasks((prev) => dummyTasks);
  }, []);

  return (
    <>
      {openAddDialog && (
        <Dialog onClose={() => setOpenAddDialog(false)}>
          <TaskForm title="Create New Task" />
        </Dialog>
      )}

      <Container>
        <Header setOpenAddDialog={setOpenAddDialog} />

        <main className={styles["aside-tasks__container"]}>
          <Aside />

          <Tasks tasks={tasks} setTasks={setTasks} />
        </main>
      </Container>
    </>
  );
};

export default TaskManagePage;
