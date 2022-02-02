import React, {useState, useEffect, useRef} from 'react'
import { nanoid } from 'nanoid';

function TodoForm(props) {
  //стейт для инпута
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  //колбэк при клике на кнопку
  const handleClick = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: nanoid(5),
      text: input,
    })
    setInput('');
  }

  useEffect(() => {
    inputRef.current.focus();
  })

  //колбэк при изменении в инпуте
  const handleChange = e => {
    setInput(e.target.value);
  }

  return (
    <form className="form">
      <input 
        type="text" 
        value={input} 
        name="input-text"
        className="input"
        placeholder="Напишите задачу"
        onChange={handleChange}
        pattern="[a-zA-Z0-9]+"
        ref={inputRef}
        required
        />
        {!props.edit ? (
        <button 
      className="submitButton"
      onClick={handleClick}>
        Добавить
      </button>) 
      :       
      <button 
      className="submitButton"
      onClick={handleClick}>
        Изменить
      </button>}

    </form>
  )
}

export default TodoForm
