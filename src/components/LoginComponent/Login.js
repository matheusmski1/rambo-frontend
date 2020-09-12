import React, {useState} from 'react';

import "./Login.css"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeEmail = event => setEmail(event.target.value)
  const handleChangePassword = event => setPassword(event.target.value)

  return (
    <div className="login">

      <h2 className="titulo">Entrar</h2>

      <div className="credenciais">
        <div className="input">
          <input type="text" id="email" value={email} onChange={handleChangeEmail} required />
          <span className="barra"></span>
          <label>E-mail</label>
        </div>

        <div className="input">
          <input type="password" id="password" value={password} onChange={handleChangePassword} required />
          <span className="barra"></span>
          <label>Senha</label>
        </div>
      </div>

      <input type="submit" value="Entrar" />

      <div className="esqueci">
        <a href ="">Esqueci minha senha</a>
        <a href ="">Ainda nao possuo conta</a>
      </div>

    </div>
  );
}