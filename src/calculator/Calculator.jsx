import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleButtonClick = (buttonName) => {
    switch (buttonName) {
      case 'AC':
        setDisplayValue('0');
        setPreviousValue(null);
        setOperation(null);
        break;
      case '+/-':
        setDisplayValue((prevValue) => String(-parseFloat(prevValue)));
        break;
      case '%':
        setDisplayValue((prevValue) => String(parseFloat(prevValue) / 100));
        break;
      case '=':
        if (previousValue != null && operation != null) {
          const currentValue = parseFloat(displayValue);
          const prevValue = parseFloat(previousValue);
          let result;
          switch (operation) {
            case '+':
              result = prevValue + currentValue;
              break;
            case '-':
              result = prevValue - currentValue;
              break;
            case '×':
              result = prevValue * currentValue;
              break;
            case '÷':
              result = prevValue / currentValue;
              break;
            default:
              break;
          }
          setDisplayValue(String(result.toFixed(4)));
          setPreviousValue(null);
          setOperation(null);
        }
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        setPreviousValue(displayValue);
        setDisplayValue('0');
        setOperation(buttonName);
        break;
      default:
        setDisplayValue((prevValue) => (prevValue === '0' ? buttonName : prevValue + buttonName));
        break;
    }
  };
  

  return (
    <div className='CalApp'>
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonPanel onClick={handleButtonClick} />
    </div>
    </div>
  );
}

export default Calculator;
