import React from "react";

import Task from "./Task/Task";

import styles from "./Tasks.module.css";

const Tasks = ({ tasks, onUpdateTaskState, afterEditTask, onDeleteTask }) => {
  return (
    <div className={styles.tasks}>
      {tasks?.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onUpdateTaskState={onUpdateTaskState}
              afterEditTask={afterEditTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      ) : (
        <div>No Tasks Yet!</div>
      )}
    </div>
  );
};

export default Tasks;
