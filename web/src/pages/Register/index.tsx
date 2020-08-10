import React, { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import InputLogin from '../../components/InputLogin';

import backIcon from '../../assets/images/icons/back-primary.svg';
import logoImg from '../../assets/images/logo.svg';

import './style.css';

const Register: React.FC = () => {
  const history = useHistory();

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    let msg = {
      title: "Cadastro concluído",
      description: "Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.",
      buttonText: "Fazer login",
      link: "/"
    }
    localStorage.setItem('msgSuccess', JSON.stringify(msg));
    history.push('/successfully')
  }

  return (
    <div className="container-register">
      <div className="content-register">
        <div className="animation-register">
          <Link to="/">
            <img src={backIcon} alt="voltar" />
          </Link>
          <form onSubmit={handleRegister}>
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar.</p>
            <InputLogin name="first_name" label="Nome" />
            <InputLogin name="last_name" label="Sobrenome" />
            <InputLogin name="email" label="E-mail" />
            <InputLogin name="password" label="Senha" type="password" />
            <button type="submit">Concluir cadastro</button>
          </form>
        </div>
      </div>
      <div className="background-register">
        <div className="text">
          <img src={logoImg} alt="logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>
    </div>
  )
}

export default Register;