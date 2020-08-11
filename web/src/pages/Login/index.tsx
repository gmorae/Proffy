import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import InputLogin from '../../components/InputLogin';

import heartPurple from '../../assets/images/icons/purple-heart.svg';
import logoImg from '../../assets/images/logo.svg';

import './style.css';
import api from '../../services/api';

const Login: React.FC = () => {
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');

  const history = useHistory();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    api.post('login', { email, password }).then((res) => {
      localStorage.setItem('token', JSON.stringify(res.data.token));
      history.push('/landing');
    })
  }
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
          <form onSubmit={handleLogin}>
            <h1>Fazer Login</h1>
            <InputLogin name="email" label="E-mail" value={email} onChange={e => set_email(e.target.value)} />
            <InputLogin name="password" label="Senha" type="password" value={password} onChange={e => set_password(e.target.value)} />
            <footer>
              <div>
                <div className="checkbox">
                  <input type="checkbox" />
                   Lembrar-me
                </div>
                <Link to="forgot-password">Esqueci minha senha</Link>
              </div>
              <button type="submit">Entrar</button>
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