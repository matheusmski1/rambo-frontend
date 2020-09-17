import React, { useState } from "react";
import Input from "../../common/Input";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  return (
    <div className="login">
      <h2 className="titulo">Entrar</h2>

      <div className="credenciais">
        <Input
          label={"E-mail"}
          fieldValue={email}
          handleChange={handleChangeEmail}
        />
        <Input
          label={"Senha"}
          fieldValue={password}
          handleChange={handleChangePassword}
        />
      </div>

      <input type="submit" value="Entrar" />

      <div className="extra">
        <Link to="/forgot">Esqueci minha senha</Link>
        <Link to="/register">Ainda nao possuo conta</Link>
      </div>
    </div>
  );
}
