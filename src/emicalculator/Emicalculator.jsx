import React, { useState , useEffect } from 'react';
import './Emicalculator.css';
import SliderInput from './input_component/slider-input';
import TextInput from './input_component/text-input';
import { tenureData } from './util/tenureData';



const Bmicalculator = () => {
    const [cost,setCost] = useState(0);
    const [interest , setInterest] = useState(10);
    const [fee , setFee] = useState(1);
    const [downpayment ,setDownpayment] = useState(0);
    const [tenure ,setTenure] = useState(12);
    const [emi ,setEmi] = useState(0);

    function calculateEMI() {
      if (!cost) return;

      const loanAmt = cost - downpayment;
      const rateOfInterest = interest / 100;
      const numOfYears = tenure / 12;

      const EMI =
        (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
        ((1 + rateOfInterest) ** numOfYears - 1);

      return Number(EMI / 12).toFixed(0);
    }
    const calculateDP = (emi) => {
        if (!cost) return;
    
        const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
        return Number((downPaymentPercent / 100) * cost).toFixed(0);
      };

      useEffect(() => {
        if (!(cost > 0)) {
          setDownpayment(0);
          setEmi(0);
        }
    
        const emi = calculateEMI(downpayment);
        setEmi(emi);
      }, [tenure, cost]);

      function numberWithCommas(x) {
        if (x) return `₹ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
      }
    


    function updateEMI(e){   
        if(!cost) return;

        const dp = Number(e.target.value);
        setDownpayment(dp.toFixed(0));

        const emi =calculateEMI()

    }
    function totalEMI(){
        return numberWithCommas((emi * tenure).toFixed(0));
    }
    function updateDownPayment() {
        if (!cost) return;

        const emi = Number(e.target.value);
        setEmi(emi.toFixed(0));

        const dp = calculateDP(emi);
        setDownpayment(dp);
    }

    function totalDownPayment(){
        return numberWithCommas(
            (Number(downpayment) + (cost - downpayment) * (fee / 100)).toFixed(0)
          );
    }



    return (
      <div className='App'>    
      <span className="title" style={{ fontSize: 30, marginTop: 10 }}>
        EMI Calculator
      </span>
        <TextInput
          title={"Total Cost of Asset"}
          state={cost}
          setState={setCost}
        />

        <TextInput
          title={"Interest Rate (in %)"}
          state={interest}
          setState={setInterest}
        />

        <TextInput
          title={"Processing Fee (in %)"}
          state={fee}
          setState={setFee}
        />

        <SliderInput
          title="Down Payment"
          underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
          onChange={updateEMI}
          state={downpayment}
          min={0}
          max={cost}
          labelMin={"0%"}
          labelMax={"100%"}
        />

        <SliderInput
          title="Loan per Month"
          underlineTitle={`Total Loan Amount - ${totalEMI()}`}
          onChange={updateDownPayment}
          state={emi}
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
        />

        <span className="title">Tenure</span>
        <div className="tenureContainer">
          {tenureData.map((t) => {
            return (
              <button
                className={`tenure ${t === tenure ? "selected" : ""}`}
                onClick={() => setTenure(t)}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    );
}

export default Bmicalculator;
