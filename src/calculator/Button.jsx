import React from 'react';
import './Calculator.css';

function Button({ name, onClick }) {
  return (
    <button className="button" onClick={() => onClick(name)}>
      {name}
    </button>
  );
}

export default Button;
