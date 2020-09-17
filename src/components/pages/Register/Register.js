import React, { useState } from "react";
import Input from "../../common/Input";
import "./Register.css";

export default function Login({ fieldValue, handleChange, label }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institutionKey, setInstitutionKey] = useState("");

  const handleChangeFirstName = (event) => setFirstName(event.target.value);
  const handleChangeLastName = (event) => setLastName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleChangeInstitutionKey = (event) =>
    setInstitutionKey(event.target.value);

  return (
    <>
      <div className="register">
        <div className="credenciais">
          <Input
            label={"Primeiro Nome"}
            fieldValue={firstName}
            handleChange={handleChangeFirstName}
          ></Input>
          <Input
            label={"Sobrenome"}
            fieldValue={lastName}
            handleChange={handleChangeLastName}
          ></Input>
          <Input
            label={"E-mail"}
            fieldValue={email}
            handleChange={handleChangeEmail}
          ></Input>
          <Input
            label={"Senha"}
            fieldValue={password}
            handleChange={handleChangePassword}
          ></Input>
          <Input
            label={"Chave da Instituicao"}
            fieldValue={institutionKey}
            handleChange={handleChangeInstitutionKey}
          ></Input>
        </div>
      </div>
    </>
  );
}
