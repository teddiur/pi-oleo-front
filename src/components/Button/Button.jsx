import styles from "./Button.module.css";

const stylesVariant = {
  primary: styles.primary,
  secondary: styles.secondary,
};
export const Button = ({ title, variant = "primary", path, onClick }) => {
  const buttonId = `${Math.floor(Math.random() * 1000)}`;
  const onClickButton = path
    ? () => {
        window.location.href = path;
        if (onClick) onClick();
      }
    : onClick;

  const styleVariant = stylesVariant[variant];

  return (
    <button
      className={`${styles.base} ${styleVariant}`}
      id={buttonId}
      onClick={onClickButton}
    >
      {title}
    </button>
  );
};
