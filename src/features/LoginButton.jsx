import { useEffect } from "react";
import { Button } from "../components/Button/Button.jsx";
import { loading } from "../stores/loading.js";
import { getAxios } from "../api/";
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
      try {
        const response = await axios.post(
          "https://oleo-descarte-api.onrender.com/authenticate/",
          body
        );
        localStorage.setItem("token", response.data.access_token);
        loading.set(false);
      } catch {
        loading.set(false);
        return;
      }

      const { data } = await await getAxios().get(`/current-user/`);

      if (data["user_type"] == "donator") {
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
