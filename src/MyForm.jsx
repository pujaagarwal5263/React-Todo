import React, { useState } from 'react';

const MyForm = () => {
    const[data,setData] = useState({
        fname: " ",
        lname: " ",
        email: " ",
        phone: " ",
        qua: " "
    });
    const mySub = (event) => {
      event.preventDefault();
      alert("Submitted");
    }
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value=event.target.value;
        // const name= event.target.name;
        const {value, name}=event.target;  //object destructuring

        setData((preValue) => {
            //console.log(preValue);
            return {
                ...preValue,
                [name] : value,
            };
            // if(name === "fname"){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }; 
            // }
            // else  if(name === "lname"){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }; 
            // }
            // else  if(name === "email"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //          email: value,
            //          phone: preValue.phone
            //     }; 
            // }
            // else  if(name === "phone"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //          email: preValue.email,
            //          phone: value
            //     }; 
            // }
        });
    };
    return (

        <>
        <h1>{`Hello ${data.fname} ${data.lname}`}</h1>
        <form onSubmit={mySub}>
        <input type="text" placeholder="Enter your first name" onChange={inputEvent} name='fname' value={data.fname} />
        <input type="text" placeholder="Enter your last name" onChange={inputEvent} name='lname' value={data.lname} />
        <input type="email" placeholder="Enter your email" onChange={inputEvent} name='email' 
        value={data.email} autoComplete="off" />
        <input type="text" placeholder="Enter your qualification" onChange={inputEvent} name='qua' value={data.qua} />
        <input type="text" placeholder="Enter your phone" onChange={inputEvent} name='phone' value={data.phone} />
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.qua}</p>
        <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default MyForm;