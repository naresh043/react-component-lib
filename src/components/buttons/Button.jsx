import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
    //   disabled={disabled || loading}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
    >
      {children}
    </button>
  );
}
