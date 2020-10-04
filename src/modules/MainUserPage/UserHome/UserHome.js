import React from "react";
import UserHomeView from "./UserHomeView";

export default function UserHome() {
  function createData(numero, data, nomeDoAmbiente, estado) {
    return { numero, data, nomeDoAmbiente, estado };
  }
  const rows = [
    createData("504", "05/06", "Casa do Matheus", "Pouco Requisitado"),
    createData("1051", "29/05", "Casa da Vitoria", "Muito Requisitado"),
    createData("741", "26/06", "Casa do Chrystian", "Requisitado"),
    createData("001", "30/04", "Casa do Hinkel", "Disponivel"),
  ];

  return <UserHomeView {...{ rows }} />;
}
