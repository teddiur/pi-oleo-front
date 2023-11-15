import { useState, useEffect } from "react";
import { getAxios } from "../api";
import Title from "../components/Title.astro";

const HomeName = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const get = async () => {
      const {
        data: { name },
      } = await getAxios().get(`/current-user/`);
      setName(name);
    };
    get();
  }, []);

  if (!name) {
    return <></>;
  }

  return (
    <>
      <h1
        style={{
          color: "#515251",
          margin: 0,
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        Olá, {name}!
      </h1>
    </>
  );
};

export default HomeName;
