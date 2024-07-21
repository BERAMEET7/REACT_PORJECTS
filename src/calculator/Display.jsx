import React from 'react';
import "./Calculator.css";

function Display({ value }) {
  return (
    <div className="display">
      {value}
    </div>
  );
}

export default Display;
