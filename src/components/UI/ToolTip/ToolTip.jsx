import React from "react";

import styles from "./ToolTip.module.css";

const ToolTip = ({ text, className }) => {
  return <div className={`${styles["tool-tip"]} ${className}`}>{text}</div>;
};

export default ToolTip;
