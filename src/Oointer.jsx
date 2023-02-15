import React, { useState } from 'react';

let x=0;
  
const Oointer = () =>{
    const [val, setVal]= useState(x);
    const increase = () => {
        x++;
        setVal(x);
    }
    const decrease = () => {
        if(x==0){
            setVal(x);
        }    
        else{
            x--;
        setVal(x);
        }
    }
    
  return(
<>
<h1>{val}</h1>
<button onClick={increase}>Increase</button>
<button onClick={decrease}>Decrease</button>
</>
  )
}


export default Oointer;