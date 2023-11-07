import { useEffect } from "react";
import { Button } from "../components/Button/Button.jsx";
import { loading } from "../stores/loading.js";
import { useStore } from "@nanostores/react";
import axios from "axios";

export const LoginButton = () => {
  const $loading = useStore(loading);
  const onClick = () => {};

  useEffect(() => {
    const loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", async function (e) {
      loading.set(!$loading);

      e.preventDefault();

      const body = new FormData();
      // return;
      body.append("username", e.target.username.value);
      body.append("password", e.target.password.value);
      const response = await axios.post(
        "https://oleo-descarte-api.onrender.com/authenticate/",
        body
      );

      localStorage.setItem("token", response.data.access_token);
      loading.set(!$loading);

      window.location.href = "/home-doador";
    });
  }, []);
  return (
    <div style={{ margin: "20px auto 0 auto" }}>
      <Button title="Entrar" type="submit" />
    </div>
  );
};
