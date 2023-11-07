import { useState, useRef } from "react";
import doador1 from "../../images/doador.svg";
import doador2 from "../../images/doador-active.svg";
import retirador1 from "../../images/recebedor.svg";
import retirador2 from "../../images/recebedor-active.svg";
import styles from "./Register.module.css";
import axios from "axios";
import { RegisterDoar } from "./RegisterDoar.jsx";
import { RegisterRetirar } from "./RegisterRetirar.jsx";

export const Register = () => {
  const [userType, setUserType] = useState(null);
  const dialogRef = useRef();

  const doador = {
    true: doador2,
    false: doador1,
  };
  const retirador = {
    true: retirador2,
    false: retirador1,
  };

  // TODO: adicionar loading
  const cadastrar = async (body, path) => {
    try {
      const a = await axios.post(
        `https://oleo-descarte-api.onrender.com/${path}/`,
        body
      );
      window.location.href = "/cadastro-sucesso";
    } catch (e) {
      if (e?.response?.status === 409) {
        window.location.href = "/ja-cadastrado";
      }
    }
  };
  const cadastrarRetirador = async (formValues) => {
    const body = {
      document: formValues.document.value,
      email: formValues.email.value,
      telephone: formValues.telephone.value,
      cep: formValues.cep.value,
      address: formValues.address.value,
      password: formValues.password.value,
      allow_delivery: formValues.allowDelivery.checked,
      user_type: "retirador",
      city: "nope",
      district: "nope",
      oil_quantity: 0,
    };

    const a = await axios.get(
      `https://viacep.com.br/ws/${body.cep.replace("-", "")}/json/`
    );
    body.district = a?.data?.bairro;

    cadastrar(body, "collector");
  };

  const cadastrarDoador = async (formValues) => {
    const body = {
      name: formValues.name.value,
      surname: formValues.surname.value,
      email: formValues.email.value,
      telephone: formValues.telephone.value,
      password: formValues.password.value,
      user_type: "doador",
      city: "nope",
      district: "nope",
      oil_quantity: 0,
    };

    cadastrar(body, "donator");
  };

  return (
    <form
      id="form"
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const formValues = e.target;
        if (userType == "retirador") {
          cadastrarRetirador(formValues);
        } else if (userType == "doador") {
          cadastrarDoador(formValues);
        } else {
          alert("NOPE");
        }
      }}
    >
      <div className={styles.userTypeContainer}>
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
        <dialog ref={dialogRef} className={styles.dialog}>
          <output className={styles.success}>
            Cadastro realizado com sucesso!
            <br />
            Você será redirecionado a tela de login em 5s...
          </output>
        </dialog>
      </div>
    </form>
  );
};
