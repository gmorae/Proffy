import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/41982298?v=4" alt="Gabriel Moraes" />
        <div>
          <strong>Gabriel Moraes</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum in aspernatur perspiciatis ipsam animi laboriosam, provident minima eos amet dolorem iusto, atque cupiditate quisquam dicta deserunt totam ab velit!
          </p>
      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;