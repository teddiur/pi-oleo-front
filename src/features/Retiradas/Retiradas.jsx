import { Button } from "../../components/Button/Button.jsx";
import Spinner from "../../components/Spinner";
import styles from "./Retiradas.module.css";
import React, { useEffect, useState } from "react";
import { getAxios } from "../../api";

export const Retiradas = () => {
  const [user, setUser] = useState({ hasOil: null });

  useEffect(() => {
    const get = async () => {
      const { data } = await getAxios().get(`/my-oil/`);
      console.log(data, "vaaaai");
      setUser({
        hasOil: data.oil_quantity > 0,
        oilQuantity: data.oil_quantity,
        day: data.day ? new Date(data.day).toLocaleDateString("pt-BR") : "",
      });
    };
    get();
  }, []);

  if (user.hasOil === null) {
    return <Spinner />;
  }

  if (user.hasOil === false) {
    return (
      <Button
        title="Cadastrar meu óleo usado agora!"
        path="cadastro-oleo"
        client:load
      />
    );
  }

  return (
    <>
      <React.Fragment key="day">
        <p className={styles.day}>{user.day}</p>
        <p className={styles.volume}>{user.oilQuantity} litros</p>
      </React.Fragment>
    </>
  );
};
