import React from "react";
import hamburguer from "../../images/hamburguer.svg";
import style from "./HamburguerMenu.module.css";

export const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className={style.large_menu}>
        <a href="login">Login</a>
        <a href="contato">Contato</a>
        <a href="perguntas-frequentes">Dúvidas</a>
        <a href="onde-descartar">Onde descartar?</a>
        <a href="cadastrar">Criar conta</a>
      </div>
      <div className={style.small_menu}>
        {isOpen ? (
          <div className={style.container}>
            <a href="login">Login</a>
            <a href="contato">Contato</a>
            <a href="perguntas-frequentes">Dúvidas</a>
            <a href="onde-descartar">Onde descartar?</a>
            <a href="cadastrar">Criar conta</a>
          </div>
        ) : (
          <img
            {...hamburguer}
            alt="Menu"
            width={20}
            height={20}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </div>
    </>
  );
};
