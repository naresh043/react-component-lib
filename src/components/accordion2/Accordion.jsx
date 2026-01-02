import React from "react";
import styles from "./accordion.module.css";

function Accordion({ label, isOpen, onToggle, children }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.header} ${
          isOpen ? styles.active : ""
        }`}
        onClick={onToggle}
      >
        {label}
        <span className={styles.icon}>
          {isOpen ? "-" : "+"}
        </span>
      </div>


      <div
        className={`${styles.panel} ${
          isOpen ? styles.open : ""
        }`}
      >
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
