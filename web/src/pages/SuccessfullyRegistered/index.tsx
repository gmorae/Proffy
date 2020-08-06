import React from 'react';
import { Link } from 'react-router-dom';

import iconSuccess from '../../assets/images/icons/success-check-icon.svg'

import './style.css';

const SuccessfullyRegistered: React.FC = () => {
  return (
    <main className="background-success">
      <img src={iconSuccess} alt="Icon success" />
      <h1>Cadastro salvo!</h1>
      <p>Tudo certo, seu cadastro está na nossa lista de professores.<br />
        Agora é só ficar de olho no seu WhatsApp.</p>
      <Link to="/study">Acessar a lista</Link>
    </main>
  )
}

export default SuccessfullyRegistered;