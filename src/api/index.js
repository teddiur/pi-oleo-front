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
