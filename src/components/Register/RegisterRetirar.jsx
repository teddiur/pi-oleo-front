import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";
import styles from "./Register.module.css";

export const RegisterRetirar = () => {
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
        placeholder="99 99999-9999"
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="CEP"
        id="cep"
        name="cep"
        type="text"
        placeholder="99999-99"
        pattern="\d{5}-\d{3}"
        required
        labelStyle={{ marginBottom: "0.5rem", marginTop: "0.75rem" }}
      />
      <Input
        label="Endereço"
        id="address"
        name="address"
        type="text"
        placeholder="Digite a rua ou avenida"
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
