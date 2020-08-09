import React, { InputHTMLAttributes } from 'react';

import './style.css';

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string,
}

const InputLogin: React.FC<Params> = ({ label, name, ...rest }) => {
  return (
    <div className="input-login">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  )
}

export default InputLogin;