import React from 'react';

import './Button.css';

const Button = props => {
  let isvalid = props.checkvalid 
  return (
    <button type={props.type}  className={`button ${!isvalid ? 'invalid' : ''}`}  onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
