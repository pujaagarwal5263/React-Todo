import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const Todo = () => {
const [val,setVal]=useState();
const [Items,setItems]=useState([]);

const myTask= (event) => {
 setVal(event.target.value);
}
const listOfItems=() => {
 setItems( (oldvalue) => {
     return [...oldvalue,val];
     setVal("");
 })
};
const deleteItems = (id) =>{
    console.groupCollapsed("deleted");
    setItems( (oldItems) => {
        return oldItems.filter( (arrElem,index) => {
             return index!==id;
        })
    })
}
    return(
 <>
 <div className="myDiv"><h2>My Todo List</h2>
 <div className="center_div">
     <br />
     <h1>ToDo List</h1>

     <input type="text" placeholder="Add task" onChange={myTask} value={val} />
     <Tooltip title="Add task">
     <Button onClick={listOfItems}>+</Button>
     </Tooltip>
     <ol>
     {/* Items have 4 arguments: 1.current value, 2.index of current value, 3.array to be
     dealt with, 4. this value  */}
        {Items.map( (itemval, index)=> {return <ToDoLists 
        key={index} 
        id={index} 
        text={itemval} 
        onSelect={deleteItems}
        />;} )}
     </ol>
 </div>
 </div>
 </>
    );
}

export default Todo;