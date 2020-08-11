import React from 'react';
import { Link } from 'react-router-dom';

import backLink from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import rocket from '../../assets/images/icons/rocket.svg';
import smile from '../../assets/images/icons/smile.svg';

import './styles.css';

interface Params {
  title: string,
  page: string,
  description?: string,
  icon: string
  descriptionIcon?: string
}

const PageHeader: React.FC<Params> = (props) => {
  return (
    <header className="page-header">
      <div className="purple-dark">
        <div className="top-bar-container">
          <Link to="/landing">
            <img src={backLink} alt="Voltar" />
          </Link>
          <p>{props.page}</p>
          <img src={logoImg} alt="Proffy" />
        </div>
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        <div className="header-content-footer">
          {props.description ? <p>{props.description}</p> : <p />}
          <div className="header-icon">
            <img src={props.icon === 'rocket' ? rocket : smile} alt="icon" />
            <span>{props.descriptionIcon}</span>
          </div>
        </div>
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader;