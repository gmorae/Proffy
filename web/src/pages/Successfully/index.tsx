import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import iconSuccess from '../../assets/images/icons/success-check-icon.svg'

import './style.css';

interface Params {
  title: string;
  description: string;
  buttonText: string;
  link: string
}

const Successfully: React.FC = () => {
  const [message, setMessage] = useState<Params>();

  useEffect(() => {
    let msg = localStorage.getItem('msgSuccess') as string;
    setMessage(JSON.parse(msg));
  }, [])

  if (!message) {
    return <p>Carregando...</p>
  }

  return (
    <main className="background-success">
      <img src={iconSuccess} alt="Icon success" />
      <h1>{message.title}</h1>
      <p>{message.description}</p>
      <Link to={message.link}>{message.buttonText}</Link>
    </main>
  )
}

export default Successfully;