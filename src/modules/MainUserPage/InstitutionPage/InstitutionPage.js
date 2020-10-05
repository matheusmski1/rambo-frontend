import React from "react";
import InstitutionPageView from "./InstitutionPageView";

export default function InstitutionPage() {
  function createData(nomeDoAmbiente, ultimaReserva, estado) {
    return { nomeDoAmbiente, ultimaReserva, estado };
  }
  const rows = [
    createData("Casa do Matheus", "05/06", "Pouco Requisitado"),
    createData("Casa da Vitoria", "23/01", "Muito Requisitado"),
    createData("Casa do Chrystian", "02/02", "Requisitado"),
    createData("Casa do Hinkel", "01/02", "Disponivel"),
  ];
  return <InstitutionPageView {...{ rows }} />;
}
