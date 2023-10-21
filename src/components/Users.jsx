import User from "./User";

export const Users = () => {
  const users = [
    { name: "oi", city: "São Paulo", district: "Sapopemba", oil_quantity: 11 },
  ];

  return (
    <>
      {users.map((user, index) => (
        <User user={user} key={index} client:load />
      ))}
    </>
  );
};
