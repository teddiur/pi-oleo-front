import { Button } from "../components/Button/Button.jsx";
import { useState, useEffect } from "react";
import { PointsDisplay } from "./PointsDisplay.jsx";
import cry from "../images/cry.png";
import happy from "../images/friend.png";

import { getAxios } from "../api";

const OldPoints = ({ points }) => {
  return (
    <>
      <p
        style={{
          fontWeight: 900,
        }}
      >
        Faz tempo que não doa seu óleo usado
      </p>

      <span style={{ display: "flex" }}>
        <p
          style={{
            fontWeight: 900,
          }}
        >
          Você tem {points} pontos.
        </p>
        <img {...cry} />
      </span>

      <p
        style={{
          fontWeight: 900,
        }}
      >
        Volte a doar e comece a acumular conquistas, além de ajudar o
        meio-ambiente.
      </p>

      <Button
        title="Cadastrar meu óleo usado agora!"
        type="button"
        path="cadastro-oleo"
        client:load
      />
    </>
  );
};

const PointsHome = () => {
  const [points, setPoints] = useState(0);
  const [liters, setLiters] = useState(0);
  const [isOld, setIsOld] = useState(false);

  useEffect(() => {
    const get = async () => {
      let apiPoints, apiOld, apiLiters;
      if (false) {
        const { points: apiPoints, is_old: apiOld } = await getAxios().get(
          `/points/`
        );
      } else {
        apiPoints = 9;
        apiLiters = 9;
        apiOld = false;
      }
      setPoints(apiPoints);
      setLiters(apiLiters);
      setIsOld(apiOld);
    };
    get();
  }, []);

  if (isOld) {
    return (
      <>
        <button onClick={() => setIsOld(!isOld)}>toggle</button>
        <OldPoints points={points} />
      </>
    );
  }

  return (
    <>
      <p
        style={{
          fontWeight: 900,
        }}
      >
        Você já doou {liters} litros de óleo até agora, veja sua pontuação:
      </p>
      <PointsDisplay meter={false} />

      <span
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <meter max="10" value={points} min="0" style={{ flexGrow: 1 }} />
        <img {...happy} />
      </span>
      <p
        style={{
          fontWeight: 900,
          margin: "2rem 0",
        }}
      >
        Conquiste o nível 10 e ganhe o selo, amigo do bairro!
      </p>
      <Button
        title="Quero subir de nível"
        path="cadastro-oleo"
        buttonStyle={{ margin: "0 auto" }}
      />
    </>
  );
};

export default PointsHome;
