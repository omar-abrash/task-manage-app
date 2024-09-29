import React from "react";

import styles from "./Radio.module.css";

const Radio = ({ className, title, options, initialValue, afterSelect }) => {
  return (
    <div className={className}>
      <div className={styles.title}>{title}</div>

      {options?.map((option) => (
        <div key={option.id} className={styles["option-item"]}>
          <input
            type="radio"
            id={option.id}
            name={title}
            checked={initialValue === option.value}
            onChange={() => afterSelect(option.value)}
            className={styles.input}
          />

          <label htmlFor={option.id} className={styles.label}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
