import Spinner from "../../components/Spinner";
import styles from "./Retiradas.module.css";
import React, { useEffect, useState } from "react";
import { getAxios } from "../../api";

export const Retiradas = () => {
  const [user, setUser] = useState({ hasOil: null });

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await getAxios().get(`/my-oil/`);
        setUser({
          hasOil: data.oil_quantity > 0,
          oilQuantity: data.oil_quantity,
          day: data.day ? new Date(data.day).toLocaleDateString("pt-BR") : "",
        });
      } catch (e) {
        if (e.response.status === 404) {
          setUser({ hasOil: false });
        }
      }
    };
    get();
  }, []);

  if (user.hasOil === null) {
    return <Spinner />;
  }

  return (
    <>
      <React.Fragment key="day">
        <p class={styles.bold}>Próxima retirada</p>

        {user.day ? (
          <p className={styles.day}>{user.day}</p>
        ) : (
          <p className={styles.day}>Doação ainda não agendada para retirada!</p>
        )}
        {user.oilQuantity !== undefined && (
          <p className={styles.volume}>
            {user.oilQuantity} litro{user.oilQuantity > 1 && "s"} cadastrado
            {user.oilQuantity > 1 && "s"}
          </p>
        )}
      </React.Fragment>
    </>
  );
};
