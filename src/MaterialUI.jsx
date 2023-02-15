import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ListCom from './ListCom';

const MaterialUI = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
     setItem(event.target.value);
  }
  const listOfItems = () => {
    setNewItem( (prevValue) => {
     return[...prevValue, item];
    });
    setItem(" ");
  }
    return (
     <>
    <div className="main_div">
      <div className="centerDiv">
       <br />
         <h1>To Do List</h1>
       <br />
       <input type="text" value={item} placeholder="Add a task" onChange={itemEvent}/>
       <Button className="newBtn" onClick={listOfItems}>
         <AddIcon />
       </Button>
      </div>
      <ol>
      {
        newitem.map((val, index) =>{
            return <ListCom key={index} text={val} />;
        })
      }
      </ol>
    </div>
     </>
    );
}
export default MaterialUI;