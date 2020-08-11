import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'

import { useAxios } from '../../hooks/useAxios';
import Loading from '../../components/Loading';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcons from '../../assets/images/icons/purple-heart.svg';

import { parseJwt } from '../../utils/auth';


const Landing: React.FC = () => {
  const { data } = useAxios<{ total: number }>('connections')
  const { first_name, last_name, avatar } = parseJwt();
  const history = useHistory();

  if (!data) {
    return <Loading />
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div id="page-landing">

      <div id="page-landing-content" className="container">
        <header>
          <div className="profile">
            {
              !avatar
                ? <img src={require('../../assets/images/user.png')} alt="profile" />
                : <img src={avatar} alt={first_name} />
            }
            <Link to="profile">{first_name} {last_name}</Link>
          </div>
          <button type="button" onClick={handleLogout} className="logoff">
            <FiPower size={20} color="#D4C2FF" />
          </button>
        </header>
        <div className="logo-container">
          <img src={logoImg} alt="logo proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aula" />
            Dar aula
          </Link>
        </div>

        <span className="total-connections">
          Total de {data.total} conexões realizadas
          <img src={purpleHeartIcons} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;