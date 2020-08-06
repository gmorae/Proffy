import React, { SelectHTMLAttributes } from 'react';

import './style.css';

interface Params extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<{ value: string, label: string }>
}

const Select: React.FC<Params> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {
          options.map(({ label, value }, index) => (
            <option key={index} value={value}>{label}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select;