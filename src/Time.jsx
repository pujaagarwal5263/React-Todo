import React, { useState } from 'react';

const Time = () => {
    let d = new Date().toLocaleTimeString();

    const state=useState();
    const [cTime,setCtime]=useState(d);
    
    const currTime=() => {
        d = new Date().toLocaleTimeString();
        setCtime(d);
    }
    return (
    <>
    <h1 id="ead">{cTime}</h1>
    <button onClick={currTime}>Get Time</button>
    </>
);
}

export default Time;