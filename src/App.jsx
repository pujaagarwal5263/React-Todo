import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const purple = '#8e44ad';
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('Click me!');

    const bgChange = () => {
      let newBg = '#34495e';
      setBg(newBg);
      setName('ouch ☘️');
    };

    const bgBack = () => {
        let myBg = '#FF0000';
        setBg(myBg);
        setName('Ayyo 😠');
    }
    return(
        <>
        <div style={ { backgroundColor : bg }}>
            <button className="btn btn-success text-white" onClick= {bgChange} onMouseOver={bgBack}>{name}</button>
        </div>
        </>
    );
}
export default App;