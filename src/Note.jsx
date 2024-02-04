import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const Note = (props) => {

const onchangevalue = ()=>{
    props.deleteTo(props.id);
}    
  return (
    <div className='notesto'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onchangevalue}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
