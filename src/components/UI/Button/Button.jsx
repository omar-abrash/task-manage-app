import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, title, className, type, ...props }) => {
  return (
    <div>
      <button
        className={`${styles.btn} ${className}`}
        type={type || "button"}
        {...props}
      >
        {children || title}
      </button>
    </div>
  );
};

export default Button;
