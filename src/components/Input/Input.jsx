import styles from "./Input.module.css";
import React from "react";

export const Input = React.forwardRef(
  (
    {
      label,
      id,
      type,
      placeholder,
      name,
      labelStyle = {},
      inputStyle = {},
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <label htmlFor={id} style={labelStyle}>
          {label}
        </label>
        <input
          name={name}
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          style={inputStyle}
          {...rest}
        />
      </>
    );
  }
);
