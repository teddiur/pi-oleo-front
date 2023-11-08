import { useEffect } from "react";
import { Button } from "../components/Button/Button.jsx";
import { loading } from "../stores/loading.js";
import axios from "axios";

export const LoginButton = () => {
  useEffect(() => {
    const loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", async function (e) {
      loading.set(true);

      e.preventDefault();

      const body = new FormData();
      body.append("username", e.target.username.value);
      body.append("password", e.target.password.value);
      const response = await axios.post(
        "https://oleo-descarte-api.onrender.com/authenticate/",
        body
      );

      localStorage.setItem("token", response.data.access_token);
      loading.set(false);

      if (response.data.user_type == "doador") {
        window.location.href = "/home-doador";
      } else {
        window.location.href = "/home-retirador";
      }
    });
  }, []);
  return (
    <div style={{ margin: "20px auto 0 auto" }}>
      <Button title="Entrar" type="submit" />
    </div>
  );
};
