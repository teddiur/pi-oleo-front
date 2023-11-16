import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { getAxios } from "../../api";
import Spinner from "../../components/Spinner";
import styles from "./OilSearch.module.css";

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
          <p class="liters">{totalVolume} Litros</p>
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
          {oils.map(({ address, oil_quantity }) => (
            <div key={address} className={styles.select}>
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
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default OilSearch;
