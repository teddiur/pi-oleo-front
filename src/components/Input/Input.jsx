import { Label } from "../Label/Label";
import styles from "./Input.module.css";
import React from "react";
import InputMask from "react-input-mask";

export const Input = React.forwardRef(
  (
    {
      label,
      id,
      type,
      placeholder,
      name,
      mask,
      labelStyle = {},
      inputStyle = {},
      ...rest
    },
    ref
  ) => {
    if (mask) {
      return (
        <>
          <Label label={label} htmlFor={id} labelStyle={labelStyle} />
          <InputMask
            name={name}
            id={id}
            ref={ref}
            type={type}
            mask={mask}
            placeholder={placeholder}
            className={styles.input}
            style={inputStyle}
            {...rest}
          />
        </>
      );
    }
    return (
      <>
        <Label label={label} htmlFor={id} labelStyle={labelStyle} />
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
