import React, { useState } from "react";

import styles from "./Input.module.css";

const Input = ({ id, title, value, required, className, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`${styles.main} ${className}`}>
      {(focus || value) && (
        <label htmlFor={id} className={styles.label}>
          <span>{title}</span>
          {required && <span className={styles["red-star"]}> * </span>}
        </label>
      )}

      <input
        className={styles.input}
        placeholder={title}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;
