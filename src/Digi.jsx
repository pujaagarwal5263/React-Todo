import React, { useState } from 'react';

const Digi = () =>
{
 let t = new Date().toLocaleTimeString();
 //react hooks
 const CTime = useState(t);
 const [currTime,setTime] = CTime;
 const UpdateTime = ()=> {
    t = new Date().toLocaleTimeString();
    setTime(t);
 }
 setInterval(UpdateTime,1000);
 
 return <h1> {currTime} </h1>
}

export default Digi;