import styles from "./Input.module.css";

export default function xInput({
  type = "text",
  value,
  onChange,
  placeholder = "",
  size = "md",
  variant = "outline",
  disabled = false,
  error = false,
  ...rest
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.input} ${styles[size]} ${
        error ? styles.error : styles[variant]
      }`}
      {...rest}
    />
  );
}
