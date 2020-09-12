import React from 'react';
import './Register.css';
export default function Login() {

return (

<div className="registre--tudo">

      <div className="registre--cadastrese">
        <h2>Cadastre-se</h2>
      </div>
      <div className="login--credenciais">

        <input
          name='firstname'
          placeholder='Primeiro Nome' />
        <br></br>

        <input
          name='lastname'
          placeholder='Sobrenome'/>
        <br></br>

        <input
          name='email'
          placeholder='Endereco de e-mail'/>
        <br></br>

        <input
          name='password'
          placeholder='Senha'/>
        <br></br>

        <input
          name='passoword-repeat'
          placeholder='Repetir senha'/>
        <br></br>

        <input
          name='institutionkey'
          placeholder='Chave da instituicao'/>
        <br></br>

        <button type="submit">
        Continuar com Cadastro
        </button>
        



      </div>


      <div className="register--backtologin">
        <div className="login--href1">
          <a href ="">Ja possuo uma conta, desejo entrar</a>
        </div>
      </div>

</div>
)











}
