import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { getAxios } from "../../api";
import Spinner from "../../components/Spinner";
import styles from "./OilSearch.module.css";

function proximoDiaSemana(numeroDiaSemana) {
  // Criar um objeto de data para a data atual
  var hoje = new Date();

  // Obter o dia atual da semana (0 a 6, onde 0 é domingo e 6 é sábado)
  var diaAtual = hoje.getDay();

  // Calcular a diferença de dias para o próximo dia desejado
  var diferencaDias = numeroDiaSemana - diaAtual;

  // Se a diferença for não negativa, adicionar essa diferença aos dias atuais
  // Se for negativa, adicionar 7 dias (uma semana) mais a diferença
  diferencaDias = diferencaDias >= 0 ? diferencaDias : diferencaDias + 7;

  // Adicionar a diferença de dias à data atual
  hoje.setDate(hoje.getDate() + diferencaDias);

  return hoje;
}

const OilSearch = () => {
  const [chosenDistrict, setChosenDistrict] = useState([]);
  const [oils, setOils] = useState([]);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalVolume = oils.reduce((acc, cur) => acc + cur.oil_quantity, 0);
  return (
    <>
      <Button
        title="Buscar"
        id="buscar"
        buttonStyle={{ marginBottom: "3rem", marginTop: "1rem" }}
        onClick={async () => {
          setIsLoading(true);
          const a = document.getElementById("district");
          const district = a.value;
          if (!district) alert("escolhe o bairro");
          try {
            const { data } = await getAxios().get("/oil/open/" + district);
            setChosenDistrict(district);
            const oilsAvailable = data.sort((a, b) => {
              if (a.day > b.day) return 1;
              if (a.day < b.day) return -1;
              return 0;
            });

            setOils(oilsAvailable);
          } catch {
            console.log("hm");
          } finally {
            setSearched(true);
            setIsLoading(false);
          }
        }}
      />
      {isLoading && <Spinner />}
      {searched && (
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
            Veja a quantidade de óleo que você pode ir buscar nesse bairro:
          </h1>
          <p className="liters">{totalVolume} Litros</p>
          <h1
            style={{
              color: "#1dbc4a",
              margin: 0,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Lista de endereços para retirada no Bairro {chosenDistrict}
          </h1>
          {oils.map(({ address, oil_quantity, day_available, id }) => {
            const onClick = () => {
              const translator = {
                domingo: 0,
                segunda: 1,
                terca: 2,
                quarta: 3,
                quinta: 4,
                sexta: 5,
                sabado: 6,
              };

              const collectDay = proximoDiaSemana(translator[day_available]);

              getAxios().post("/oil/collect", {
                day: collectDay.toISOString("pt-BR").slice(0, 10),
                ids: [id],
              });
            };
            return (
              <div key={address} className={styles.select} onClick={onClick}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  {address}
                </p>
                <p
                  style={{
                    color: "#515251",
                    margin: "0.25rem 0 0 0",
                    lineHeight: "normal",
                  }}
                >
                  {oil_quantity} litros para retirar.
                </p>
                <p
                  style={{
                    color: "#515251",
                    margin: "0.25rem 0 0 0",
                    lineHeight: "normal",
                  }}
                >
                  Dia para retirar: {day_available}
                </p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
export default OilSearch;
