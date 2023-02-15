import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [Fullname, setFullname] = useState("User");
    const [Fullname2, setFullname2] = useState(" ");

    const inputEvent = (event) => {
        setName(event.target.value);
    }
    const inputEventTwo = (e) => {
        setLastname(e.target.value);
    }
    const submit = (event) => {
        event.preventDefault();
        setFullname(name);
        setFullname2(lastname);
    }
    return(
     <>
     <h1>{`Hello ${Fullname} ${Fullname2}!`}</h1>
     <form onSubmit={submit}>
     <input type='text' placeholder='Enter name' onChange={inputEvent} value={name}/>
     <input type='text' placeholder='Enter last name' onChange={inputEventTwo} value={lastname}/>
     <button type="submit">Submit 🆗 </button>
     </form>
     </>
    );
    };
    
export default Form;