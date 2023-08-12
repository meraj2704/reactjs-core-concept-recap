import React, { useState } from 'react';
import './District.css'

const District = props => {
    const [power, setPower] = useState(1);
    const boostPower = ()=>{
        const newPower = power *2;
        setPower(newPower);
    }
    return (
        <div className='district'>
            <h1>Name : {props.name}</h1>
            <p>speciality : {props.special}</p>
            <p>Power : <b>{power}</b></p>
            <button onClick={boostPower}>Boost</button>
        </div>
    );
};

export default District;