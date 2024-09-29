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
    status: "incomplete",
  },
];

const TaskManagePage = () => {
  const [mainTasks, setMainTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  // filteration Part States :
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");

  // main functions :
  // 1- add task
  const addNewTaskHandler = (newTask) => {
    setMainTasks((prev) => [...prev, newTask]);
  };

  // 1- edit task
  const editTaskHandler = (editTask) => {
    const editTaskId = editTask.id;
    const removeTaskFromTasks = tasks.filter((task) => task.id !== editTaskId);
    const newTasks = [...removeTaskFromTasks, editTask];
    setMainTasks((prev) => newTasks);
  };

  // 1- delete task
  const deleteTaskHandler = (taskId) => {
    setMainTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // 1- update task
  const updateTaskState = (taskId, newState) => {
    const newTasks = [...tasks];
    newTasks.find((task) => task.id === taskId).status = newState;
    setMainTasks((prev) => newTasks);
  };

  // first fetch
  useEffect(() => {
    setMainTasks((prev) => dummyTasks);
  }, []);

  // after each filteration :
  useEffect(() => {
    let filterationTasks = [];

    // Filter by status
    status === "all"
      ? (filterationTasks = mainTasks)
      : (filterationTasks = mainTasks.filter((task) => task.status === status));

    // Filter by category
    category === "all"
      ? (filterationTasks = filterationTasks.filter((task) =>
          task.categories.some((category) =>
            ["Category 01", "Category 02", "Category 03"].includes(category)
          )
        ))
      : (filterationTasks = filterationTasks.filter((task) =>
          task.categories.includes(category)
        ));

    setTasks((prev) => filterationTasks);

    // console.log("infint loop test");
  }, [mainTasks, status, category]);

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
          <Aside
            status={status}
            setStatus={setStatus}
            category={category}
            setCategory={setCategory}
          />

          <Tasks
            tasks={tasks}
            onUpdateTaskState={updateTaskState}
            afterEditTask={editTaskHandler}
            onDeleteTask={deleteTaskHandler}
          />
        </main>
      </Container>
    </>
  );
};

export default TaskManagePage;
