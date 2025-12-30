import React from "react";
import styles from "./progress.module.css";

function ProgressBar({
  value = 0,
  height = "12px",
  background = "green",
  borderRadius = "20px",
  visibility = true,
  children,
}) {
  // clamp value between 0 and 100
  const safeValue = Math.min(Math.max(value, 0), 100);

  if (!visibility) return null;

  return (
    <div
      className={styles.wrapper}
      style={{ height, borderRadius}}
    >
      <div
        className={styles.bar}
        style={{
          width: `${safeValue}%`,
          backgroundColor: background,
          borderRadius,
        }}
      />
      {children}
    </div>
  );
}

export default ProgressBar;
