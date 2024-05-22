import React, { useEffect } from "react";
import hamburguer from "../../images/hamburguer.svg";
import style from "./HamburguerMenu.module.css";
import { getAxios } from "../../api";

export const HamburguerMenu = ({ logged }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [homePath, setHomePath] = React.useState("");

  useEffect(() => {
    async function get() {
      const { data } = await getAxios().get("/current-user/");
      if (data.user_type == "donator") {
        setHomePath("home-doador");
      } else {
        setHomePath("home-retirador");
      }
    }
    if (logged) {
      get();
    }
  }, [logged]);

  return (
    <>
      <div className={style.large_menu}>
        {logged ? (
          <>
            <a href={homePath}>Home</a>
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
                <a href={homePath}>Home</a>
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
