import React from 'react';
import { Link } from 'react-router-dom';

import InputLogin from '../../components/InputLogin';

import backIcon from '../../assets/images/icons/back-primary.svg';
import logoImg from '../../assets/images/logo.svg';

import './style.css';

const ForgotPassword: React.FC = () => {
  return (
    <div className="container-forgot-password">
      <div className="content-forgot-password">
        <div className="animation-forgot-password">
          <Link to="/">
            <img src={backIcon} alt="voltar" />
          </Link>
          <form>
            <h1>Eita, esqueceu sua senha?</h1>
            <p>Não esquenta, vamos dar um geito nisso.</p>
            <InputLogin name="email" label="E-mail" type="text" />
            <button type="button">Enviar</button>
          </form>
        </div>
      </div>
      <div className="background-forgot-password">
        <div className="text">
          <img src={logoImg} alt="logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;