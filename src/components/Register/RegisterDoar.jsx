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
        placeholder="Digite seu nome"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "1.5rem" }}
      />
      <Input
        label="Sobrenome"
        id="surname"
        name="surname"
        type="text"
        placeholder="Digite seu sobrenome"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="E-mail"
        id="email"
        name="email"
        type="email"
        placeholder="usuario@gmail.com"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Telefone com DDD"
        id="telephone"
        name="telephone"
        type="text"
        placeholder="(99) 99999-9999"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Senha"
        id="password"
        name="password"
        type="password"
        placeholder="*********"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <span className={styles.buttonContainer}>
        <Button title="Criar conta" onClick={() => {}} />
      </span>
    </>
  );
};
