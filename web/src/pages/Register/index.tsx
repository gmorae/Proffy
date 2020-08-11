import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import InputLogin from '../../components/InputLogin';

import backIcon from '../../assets/images/icons/back-primary.svg';
import logoImg from '../../assets/images/logo.svg';

import './style.css';
import api from '../../services/api';

const Register: React.FC = () => {
  const [first_name, set_first_name] = useState('');
  const [last_name, set_last_name] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');

  const history = useHistory();

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    if (first_name && last_name && email && password) {
      api.post('users', {
        first_name,
        last_name,
        email,
        password
      }).then(res => {
        let msg = {
          title: "Cadastro concluído",
          description: "Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.",
          buttonText: "Fazer login",
          link: "/"
        }
        localStorage.setItem('msgSuccess', JSON.stringify(msg));
        history.push('/successfully')
      }).catch(err => alert('erro ao cadastrar o usuário, tente novamente ou mais tarde'))
    } else {
      alert('preencha todos os campos corretamente')
    }

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
            <InputLogin name="first_name" label="Nome" value={first_name} onChange={e => set_first_name(e.target.value)} />
            <InputLogin name="last_name" label="Sobrenome" value={last_name} onChange={e => set_last_name(e.target.value)} />
            <InputLogin name="email" label="E-mail" value={email} onChange={e => set_email(e.target.value)} />
            <InputLogin name="password" label="Senha" type="password" value={password} onChange={e => set_password(e.target.value)} />
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