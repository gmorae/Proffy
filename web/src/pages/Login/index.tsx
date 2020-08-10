import React from 'react';
import { Link } from 'react-router-dom';

import InputLogin from '../../components/InputLogin';

import heartPurple from '../../assets/images/icons/purple-heart.svg';
import logoImg from '../../assets/images/logo.svg';

import './style.css';

const Login: React.FC = () => {
  return (
    <div className="container-login">
      <div className="background-login">
        <div className="text">
          <img src={logoImg} alt="logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>
      <div className="content-login">
        <div className="animation-login">
          <form>
            <h1>Fazer Login</h1>
            <InputLogin name="email" label="E-mail" type="text" />
            <InputLogin name="password" label="Senha" type="password" />
            <footer>
              <div>
                <div className="checkbox">
                  <input type="checkbox" />
                   Lembrar-me
                </div>
                <Link to="forgot-password">Esqueci minha senha</Link>
              </div>
              <button type="button">Entrar</button>
            </footer>
          </form>
          <footer>
            <span>
              Não tem uma conta ?
              <Link to="register">Cadastre-se</Link>
            </span>
            <p>
              É de graça
              <img src={heartPurple} alt="coração roxo" />
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Login;