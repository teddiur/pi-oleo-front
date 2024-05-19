import React from "react";
import hamburguer from "../../images/hamburguer.svg";
import style from "./HamburguerMenu.module.css";

export const HamburguerMenu = ({ logged }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className={style.large_menu}>
        {logged ? (
          <>
            <a href="perfil">Perfil</a>
          </>
        ) : (
          <>
            <a href="login">Login</a>
            <a href="cadastrar">Criar conta</a>
          </>
        )}
        <a href="contato">Contato</a>
        <a href="perguntas-frequentes">Dúvidas</a>
        <a href="onde-descartar">Onde descartar?</a>
      </div>
      <div className={style.small_menu}>
        {isOpen ? (
          <div className={style.container}>
            {logged ? (
              <>
                <a href="perfil">Perfil</a>
              </>
            ) : (
              <>
                <a href="login">Login</a>
                <a href="cadastrar">Criar conta</a>
              </>
            )}
            <a href="contato">Contato</a>
            <a href="perguntas-frequentes">Dúvidas</a>
            <a href="onde-descartar">Onde descartar?</a>
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
