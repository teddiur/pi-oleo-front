import styles from "./Retiradas.module.css";
import React, { useEffect, useState } from "react";

export const Retiradas = () => {
  // const [oil, setOil] = useState([]);
  const retiradas = [
    { day: "22/10/2023", volume: 15 },
    { day: "15/11/2023", volume: 2 },
  ]; /*todo: integrar api */
  // useEffect(() => {
  //   const get = async () => {
  //     const data = await getAxios().get(`/current-user/`);
  //     console.log(data, "vaaaai");
  //     // setOil(data);
  //   };
  //   get();
  // }, []);
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
