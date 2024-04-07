import axios from "axios";
import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";
import styles from "./Register.module.css";
import { useRef } from "react";
import InputMask from "react-input-mask";
import { Label } from "../Label/Label";

export const RegisterRetirar = () => {
  const addressRef = useRef();
  return (
    <>
      <Input
        label="CPF ou CNPJ"
        id="document"
        name="document"
        type="text"
        placeholder="99.999.9999/9999-99"
        required
        labelStyle={{ marginBottom: "0.5rem", marginTop: "1.5rem" }}
      />
      <Input
        label="E-mail"
        id="email"
        name="email"
        type="email"
        placeholder="usuario@gmail.com"
        required
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Senha"
        id="password"
        name="password"
        type="password"
        placeholder="*********"
        required
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Telefone com DDD"
        id="telephone"
        name="telephone"
        type="text"
        pattern="\d{2} \d{5}-\d{4}"
        mask="99 99999-9999"
        placeholder="99 99999-9999"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />

      <Input
        label="CEP"
        id="cep"
        name="cep"
        type="text"
        placeholder="99999-9999"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
        mask="99999-9999"
        pattern="\d{5}-\d{3}"
        onBlur={async (e) => {
          const response = await axios.get(
            `https://viacep.com.br/ws/${e.target.value.replace("-", "")}/json/`
          );
          if (response.status == 200)
            addressRef.current.value = response.data.logradouro;
        }}
        required
      />
      <Input
        label="Endereço"
        id="address"
        name="address"
        type="text"
        placeholder="Digite a rua ou avenida"
        ref={addressRef}
        required
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Número"
        id="number"
        name="number"
        type="number"
        placeholder="Digite o número"
        required
        pattern="\d*"
        labelStyle={{ marginTop: "0.75rem" }}
      />
      <label className={styles.checkboxContainer}>
        <input type="checkbox" id="allowDelivery" name="allowDelivery" />
        <p>Permitir entrega de óleo no meu endereço.</p>
      </label>
      <span className={styles.buttonContainer}>
        <Button title="Criar conta" onClick={() => {}} type="submit" />
      </span>
    </>
  );
};
