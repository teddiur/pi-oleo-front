import styles from "./Button.module.css";

const stylesVariant = {
  primary: styles.primary,
  secondary: styles.secondary,
};
export const Button = ({
  title,
  variant = "primary",
  path,
  onClick,
  onClickFailure,
}) => {
  const buttonId = `${Math.floor(Math.random() * 1000)}`;
  const onClickButton = path
    ? () => {
        try {
          if (onClick) onClick();
          window.location.href = path;
        } catch {
          if (onClickFailure) onClickFailure();
        }
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