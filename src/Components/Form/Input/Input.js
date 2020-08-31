import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, name, value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
}

export default Input;
