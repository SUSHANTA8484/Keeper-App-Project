import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
const Input = (props) => {
  const [result, setResult] = useState({
    title:"",
    content:""
  })   


const handelChange = (event)=>{
  const {name, value} = event.target;
  setResult(prevValue =>{
    return{
        ...prevValue,
        [name]:value
    }
  })
  
}
const addItems = (event)=>{
    props.onAdd(result);
    setResult({
        title:"",
        content:""
    })
   event.preventDefault();
}


  return (
    <div className='container'>
     <form>
        <input name="title" placeholder="Title" value={result.title} onChange={handelChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={result.content} onChange={handelChange} />
        <button onClick={addItems} ><AddIcon/></button>
      </form>
    </div>
  );
}

export default Input;
