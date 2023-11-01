import styles from "./Descartar.module.css";

export const Descartar = () => {
  const descartadores = [
    { title: "Lubleste", address: "Rua Pedro de Andrade, 226." },
    { title: "Sabão e CIA", address: "Rua Barão de Iguape, 331." },
  ];
  return (
    <>
      {descartadores.map(({ title, address }) => (
        <>
          <p className={styles.title}>{title}</p>
          <p className={styles.address}>{address}</p>
        </>
      ))}
    </>
  );
};
