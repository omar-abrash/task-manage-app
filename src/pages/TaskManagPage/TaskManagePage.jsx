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
    id: "task-1",
    title: "task one",
    description: "task one is amaizing",
    categories: ["Category 01", "Category 02", "Category 03"],
    status: "completed",
  },
  {
    id: "task-2",
    title: "task two",
    description: "task two is good",
    categories: ["Category 01", "Category 02"],
    status: "incompleted",
  },
];

const TaskManagePage = () => {
  const [tasks, setTasks] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const addNewTaskHandler = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const editTaskHandler = (editTask) => {
    const editTaskId = editTask.id;
    const removeTaskFromTasks = tasks.filter((task) => task.id !== editTaskId);
    const newTasks = [...removeTaskFromTasks, editTask];
    setTasks((prev) => newTasks);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // first fetch
  useEffect(() => {
    setTasks((prev) => dummyTasks);
  }, []);

  return (
    <>
      {openAddDialog && (
        <Dialog onClose={() => setOpenAddDialog(false)}>
          <TaskForm
            title="Create New Task"
            closeDialog={() => setOpenAddDialog(false)}
            afterAddNewTask={addNewTaskHandler}
          />
        </Dialog>
      )}

      <Container>
        <Header setOpenAddDialog={setOpenAddDialog} />

        <main className={styles["aside-tasks__container"]}>
          <Aside />

          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            afterEditTask={editTaskHandler}
            onDeleteTask={deleteTaskHandler}
          />
        </main>
      </Container>
    </>
  );
};

export default TaskManagePage;
