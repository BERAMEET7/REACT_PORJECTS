import React, { useMemo, useState } from 'react';
import "./Bmicalculator.css"


const Bmicalculator = () => {
    const [weight ,setWeight] = useState(60);
    const [height ,setHeight] = useState(150);

    const Result = useMemo(()=>{
      const heightinm = height/100;

      return(weight / (heightinm * heightinm)).toFixed(2);
    },[height,weight]);
        return (
        <>
        <div className='main'>
          <div className='title'>BMI Calculator</div>
          <div className='Container'>
            <p>Weight : {weight} kg </p>
            <input type="range" min={40} max={200} step={1} value={weight} onChange={(e)=>setWeight(e.target.value)} />
            <p>Height : {height} cm </p>
            <input type="range" min={140} max={220} step={1} value={height} onChange={(e)=>setHeight(e.target.value)} />
          </div>
          <div className='result'>
            <span className='data'>BMI : {Result}</span>
          </div>
        </div>  
        </>
    );
}

export default Bmicalculator;
