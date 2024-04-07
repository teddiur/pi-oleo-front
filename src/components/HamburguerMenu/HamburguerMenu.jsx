import React from "react";
import hamburguer from "../../images/hamburguer.svg";

export const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {isOpen ? (
        <p>WIP</p>
      ) : (
        <img
          src={hamburguer}
          alt="Menu"
          width={20}
          height={20}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      )}
    </>
  );
};
