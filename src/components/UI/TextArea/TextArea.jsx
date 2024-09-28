import React, { useState } from "react";

import styles from "./TextArea.module.css";

const TextArea = ({ id, title, value, required, className, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`${styles.main} ${className}`}>
      {(focus || value) && (
        <label htmlFor={id} className={styles.label}>
          <span>{title}</span>
          {required && <span className={styles["red-star"]}> * </span>}
        </label>
      )}

      <textarea
        className={styles["text-area"]}
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

export default TextArea;
