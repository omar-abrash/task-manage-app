import React, { useState, useEffect } from "react";

import Task from "./Task/Task";

import styles from "./Tasks.module.css";

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

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // first fetch
  useEffect(() => {
    setTasks((prev) => dummyTasks);
  }, []);

  return (
    <div className={styles.tasks}>
      {tasks?.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <div>No Tasks Yet!</div>
      )}
    </div>
  );
};

export default Tasks;
