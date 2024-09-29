import React from "react";

import Radio from "../UI/Radio/Radio";

import { statusOptions, categoriesOptions } from "../../utils/options";

import styles from "./Aside.module.css";

const Aside = ({ status, setStatus, category, setCategory }) => {
  return (
    <div className={styles.aside}>
      <h3 className={styles.heading}>Filter</h3>

      <Radio
        className={styles["radio-status"]}
        title="Completion Status"
        options={statusOptions}
        initialValue={status}
        afterSelect={setStatus}
      />

      <Radio
        className={styles["radio-categories"]}
        title="Categories"
        options={categoriesOptions}
        initialValue={category}
        afterSelect={setCategory}
      />
    </div>
  );
};

export default Aside;
