// import { useStore } from "@nanostores/react";
// import { isModalOpen } from "../stores/modalUser";

const OpenButton = () => {
  //   const $isModalOpen = useStore(isModalOpen);

  return (
    <button
      className="button"
      onClick={() => {
        console.log("clicouuuu");
        // isModalOpen.set(!$isModalOpen);
        console.log("clicouuuu");
      }}
    >
      Retire aqui!
    </button>
  );
};

export default function User({ user }) {
  return (
    <tr key={user.name + user.oil_quantity}>
      <th>{user.name}</th>
      <th>{user.city}</th>
      <th>{user.district}</th>
      <th>{user.oil_quantity}</th>
      <td>
        <OpenButton client:load />
      </td>
      <div
        style={{ background: "black", color: "white" }}
        onClick={() => console.log("grr")}
      >
        {" "}
        funcionaaaa
      </div>
    </tr>
  );
}
