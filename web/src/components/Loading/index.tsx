import React from 'react';

import './style.css';

const Loading: React.FC = () => {
  return (
    <main className="background-success">
      <div className="container">

        <div className="lds-dual-ring"></div>
        <h1>Carregando . . .</h1>
        <p>Estámos preparando tudo para você</p>
      </div>
    </main>
  )
}

export default Loading;