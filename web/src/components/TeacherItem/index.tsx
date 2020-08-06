import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

interface Params {
  teacher: {
    id: number,
    name: string,
    subject: string,
    bio: string,
    cost: number,
    whatsapp: string,
    avatar: string
  }
}

const TeacherItem: React.FC<Params> = ({ teacher }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }

  function formatValue(value: number) {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>{formatValue(+teacher.cost)}</strong>
        </p>
        <a target="_blanck" onClick={createNewConnection} href={`https://wa.me/55${teacher.whatsapp}`}>
          <img src={whatsIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;