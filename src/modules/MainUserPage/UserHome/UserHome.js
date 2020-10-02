import React from "react";
import UserHomeView from "./UserHomeView";

export default function UserHome() {
  function createData(numero, data, nomeDoAmbiente, estado) {
    return { numero, data, nomeDoAmbiente, estado };
  }
  const rows = [
    createData("504", "05062002", "Casa do Matheus", "Fechadao no vermelho"),
  ];

  return <UserHomeView />;
}
