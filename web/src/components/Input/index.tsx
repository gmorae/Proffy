import React, { InputHTMLAttributes } from 'react';
import MaskedInput from 'react-text-mask'

import './style.css';

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string,
  money?: boolean
  phone?: boolean
}

const Input: React.FC<Params> = ({ phone, money, label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      {
        phone && <MaskedInput id={name} type="text" {...rest}
          mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      }
      {
        money && <MaskedInput id={name} type="text" {...rest}
          mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      }

      {
        !money && !phone && <input type="text" id={name} {...rest} />
      }


    </div>
  )
}

export default Input;