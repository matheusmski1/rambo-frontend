import React from "react";
import UserHomeView from "./UserHomeView";

export default function UserHome() {
  function createData(numero, data, nomeDoAmbiente, estado) {
    return { numero, data, nomeDoAmbiente, estado };
  }
  const rows = [createData("504", "123", "Casa do Matheus", "Reservado")];

  return <UserHomeView {...{ rows }} />;
}
