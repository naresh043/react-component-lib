import React from "react";
import styles from "./checkbox.module.css";

const Checkbox = ({ label }) => {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
      />

      <label
        htmlFor="checkbox"
        className={styles.customLabel}
      />

      <label
        htmlFor="checkbox"
        className={styles.label}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
