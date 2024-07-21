import React from 'react';
import Button from './Button';
import './Calculator.css';

function ButtonPanel({ onClick }) {
  return (
    <div className="button-panel">
      <div>
        <Button name="AC" onClick={onClick} />
        <Button name="+/-" onClick={onClick} />
        <Button name="%" onClick={onClick} />
        <Button name="÷" onClick={onClick} />
      </div>
      <div>
        <Button name="7" onClick={onClick} />
        <Button name="8" onClick={onClick} />
        <Button name="9" onClick={onClick} />
        <Button name="×" onClick={onClick} />
      </div>
      <div>
        <Button name="4" onClick={onClick} />
        <Button name="5" onClick={onClick} />
        <Button name="6" onClick={onClick} />
        <Button name="-" onClick={onClick} />
      </div>
      <div>
        <Button name="1" onClick={onClick} />
        <Button name="2" onClick={onClick} />
        <Button name="3" onClick={onClick} />
        <Button name="+" onClick={onClick} />
      </div>
      <div>
        <Button name="0" onClick={onClick} className="zero" />
        <Button name="." onClick={onClick} />
        <Button name="=" onClick={onClick} />
      </div>
    </div>
  );
}

export default ButtonPanel;
