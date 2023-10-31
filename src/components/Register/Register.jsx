import { useState } from "react";
import { Input } from "../Input/Input.jsx";
import doador1 from "../../images/doador.svg";
import doador2 from "../../images/doador-active.svg";
import retirador1 from "../../images/recebedor.svg";
import retirador2 from "../../images/recebedor-active.svg";
import styles from "./Register.module.css";

import { RegisterDoar } from "./RegisterDoar.jsx";
import { RegisterRetirar } from "./RegisterRetirar.jsx";
export const Register = () => {
  const [userType, setUserType] = useState(null);

  const doador = {
    true: doador2,
    false: doador1,
  };
  const retirador = {
    true: retirador2,
    false: retirador1,
  };
  console.log(userType);
  return (
    <form action="/create-user" method="post" className={styles.form}>
      <div class={styles.userTypeContainer}>
        <input
          type="radio"
          id="doador"
          name="user-type"
          value="doador"
          className={styles.radio}
        />
        <label
          className={styles.label}
          htmlFor="doador"
          onClick={() => setUserType("doador")}
        >
          <img {...doador[userType == "doador"]} width={100} />
          Quero Doar
        </label>
        <input
          type="radio"
          id="retirador"
          name="user-type"
          value="retirador"
          className={styles.radio}
        />
        <label
          className={styles.label}
          htmlFor="retirador"
          onClick={() => setUserType("retirador")}
        >
          <img {...retirador[userType == "retirador"]} width={100} />
          Quero Retirar
        </label>
      </div>
      <div className={styles.formContainer}>
        {userType && (
          <>
            {userType == "retirador" ? <RegisterRetirar /> : <RegisterDoar />}
          </>
        )}
      </div>
    </form>
  );
};
