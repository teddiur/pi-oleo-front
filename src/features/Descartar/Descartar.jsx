import styles from "./Descartar.module.css";

export const Descartar = ({ descartadores }) => {
  return (
    <>
      {descartadores.map(({ name, address }) => (
        <>
          <p className={styles.title}>{name}</p>
          <p className={styles.address}>{address}</p>
        </>
      ))}
    </>
  );
};
