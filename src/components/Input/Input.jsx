import styles from "./Input.module.css";

export const Input = ({
  label,
  id,
  type,
  placeholder,
  name,
  labelStyle = {},
  inputStyle = {},
}) => {
  return (
    <>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        style={inputStyle}
      />
    </>
  );
};
