import axios from "axios";

export const getUser = async () => {
  const token = localStorage?.getItem("token") || "";
  console.log(token, "fuuu");

  if (!token) return null;

  const response = await axios.get(
    `https://oleo-descarte-api.onrender.com/${path}/`,
    body
  );
  console.log(response);
};

export const getAxios = () => {
  const token = localStorage?.getItem("token") || "";

  return axios.create({
    baseURL: "https://oleo-descarte-api.onrender.com/",
    timeout: 1000,
    headers: { Authorization: "Bearer " + token },
  });
};
