import { Input } from "../Input/Input.jsx";
import styles from "./Register.module.css";
import { Button } from "../Button/Button.jsx";

export const RegisterDoar = () => {
  return (
    <>
      <Input
        label="Nome"
        id="name"
        name="name"
        type="text"
        required
        placeholder="Digite seu nome"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "1.5rem" }}
      />
      <Input
        label="Sobrenome"
        id="surname"
        name="surname"
        type="text"
        placeholder="Digite seu sobrenome"
        required
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="E-mail"
        id="email"
        name="email"
        type="email"
        required
        placeholder="usuario@gmail.com"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Telefone com DDD"
        id="telephone"
        name="telephone"
        type="text"
        placeholder="99 99999-9999"
        pattern="\d{2} \d{5}-\d{4}"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Senha"
        id="password"
        name="password"
        type="password"
        required
        placeholder="*********"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <span className={styles.buttonContainer}>
        <Button title="Criar conta" onClick={() => {}} />
      </span>
    </>
  );
};
