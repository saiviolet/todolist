import React, {useState} from 'react'
import { nanoid } from 'nanoid';

function TodoForm(props) {
  //стейт для инпута
  const [input, setInput] = useState('');

  //колбэк при клике на кнопку
  const handleClick = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: nanoid(5),
      text: input,
    })
    setInput('');
  }

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
        className={input}
        placeholder="Напишите задачу"
        onChange={handleChange}
        pattern="[a-zA-Z0-9]+"
        required
        />
      <button 
      className="submitButton"
      onClick={handleClick}>
        Добавь и точно выполнишь
      </button>
    </form>
  )
}

export default TodoForm
