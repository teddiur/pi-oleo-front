import { useStore } from "@nanostores/react";
import { isModalOpen } from "../stores/modalUser";

export const UserModal = () => {
  const $isModalOpen = useStore(isModalOpen);
  if (!$isModalOpen) return null;

  return (
    <div style={{ display: "block" }}>
      <h2>Digite seus dados para contato!</h2>
      <label>Email</label>
      <input
        type="email"
        id="email"
        name="e-mail"
        placeholder="Digite aqui..."
        required
      />
      <label>Telefone</label>
      <input
        type="tel"
        id="fone"
        name="fone"
        placeholder="Digite aqui..."
        required
        maxLength="9"
      />
      <button className="btnEnviarPopup">Enviar</button>
      <a href="/list" className="btnFecharPopup">
        Fechar
      </a>
    </div>
  );
};
