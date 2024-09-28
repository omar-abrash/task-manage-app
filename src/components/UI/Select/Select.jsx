import React, { useState, useEffect } from "react";

import Chip from "../Chip/Chip";

import styles from "./Select.module.css";

const Select = ({ options, selectedOptions, setSelectedOptions }) => {
  const [values, setValues] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const addOptionToValue = (option) => {
    if (values.find((item) => item === option)) {
      return;
    }
    setValues((prev) => [...prev, option]);
    setSelectedOptions((prev) => [...prev, option]);
  };

  const removeChipHandler = (option) => {
    setValues((prev) => prev.filter((item) => item !== option));
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  useEffect(() => {
    if (selectedOptions) {
      setValues((prev) => selectedOptions);
    }
  }, [selectedOptions]);

  return (
    <div className={styles.main} onMouseLeave={() => setShowOptions(false)}>
      <div className={styles.values} onClick={() => setShowOptions(true)}>
        {values.length === 0
          ? "Categories"
          : values.map((option) => (
              <Chip
                key={option}
                title={option}
                removable={true}
                onRemove={() => removeChipHandler(option)}
              />
            ))}
      </div>

      {showOptions && (
        <div className={styles.options}>
          {options.map((option) => (
            <Chip
              key={option}
              title={option}
              onClick={() => addOptionToValue(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
