import styles from "./Retiradas.module.css";
import React from "react";

export const Retiradas = () => {
  const retiradas = [
    { day: "22/10/2023", volume: 15 },
    { day: "15/11/2023", volume: 2 },
  ]; /*todo: integrar api */
  return (
    <>
      {retiradas.map(({ day, volume }) => (
        <React.Fragment>
          <p className={styles.day}>{day}</p>
          <p className={styles.volume}>{volume} litros</p>
        </React.Fragment>
      ))}
    </>
  );
};
