import { useEffect } from "react";
import { Button } from "../components/Button/Button.jsx";
import { loading } from "../stores/loading.js";
import { getAxios } from "../api/";
import axios from "axios";

const RegisterOilButton = () => {
  const onSubmit = async function (e) {
    loading.set(true);
    const form = e.target;

    e.preventDefault();

    const body = {
      oil_quantity: parseInt(form.liters.value),
      cep: form.cep.value,
      address: form.address.value,
      address_number: form.number.value,
      complement: form.complement.value,
      day_available: form.day.value,
      telephone: form.telephone.value,
    };
    const a = await axios.get(
      `https://viacep.com.br/ws/${body.cep.replace("-", "")}/json/`
    );
    body.district = a?.data?.bairro;

    loading.set(false);

    try {
      const response = await getAxios().post("/oil/", body);
      loading.set(false);
    } catch {
      loading.set(false);
      return;
    }

    window.location.href = "/home-doador";
  };

  useEffect(() => {
    const loginForm = document.getElementById("submit-oil");
    loginForm.addEventListener("submit", onSubmit);
  }, []);

  return (
    <div style={{ margin: "20px auto 0 auto" }}>
      <Button
        title="Registrar"
        type="submit"
        buttonStyle={{ margin: "0 auto" }}
        // client:load
        // onSubmit={onSubmit}
        // onClick={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default RegisterOilButton;
