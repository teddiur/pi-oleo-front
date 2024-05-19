import axios from "axios";

export const getUser = async () => {
  const token = localStorage?.getItem("token") || "";

  if (!token) return null;

  const response = await axios.get(
    `https://oleo-descarte-api.onrender.com/${path}/`,
    body
  );
};

export const getAxios = () => {
  const token = localStorage?.getItem("token") || "";

  return api({ token });
};

export const api = ({ token = null, timeout = 10000 }) => {
  const auth = token ? { headers: { Authorization: "Bearer " + token } } : {};

  return axios.create({
    baseURL: "https://oleo-descarte-api.onrender.com/",
    timeout,
    ...auth,
  });
};
