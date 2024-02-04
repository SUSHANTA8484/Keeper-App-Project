import React, { useState } from 'react';
import Nav from './Nav';
import Input from './Input';
import Note from './Note';

const App = () => {
  const [note, setNotes] = useState([]);

const addResult = (resultNote)=>{
    setNotes(prevValue =>{
      return [...prevValue,resultNote]
    })
    
}  
const deletetoChage = (id)=>{
   setNotes(prevValue =>{
    return prevValue.filter((itemon, index)=>{
      return index !== id;
      
    })
    
   })
   
}
  return (
    <div>
     <Nav/>
     <Input  onAdd={addResult} />
     {note.map((item, index) =>{
       return <Note key={index} id={index} title={item.title} content={item.content} deleteTo={deletetoChage} />
     })}
    </div>
  );
}

export default App;
