import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList() {

  //стейт для списка дел, изначально пустой массив
  const [todos, setTodos] = useState([]);
  //колбэк при отправке формы
  const addNewtodo = todo => {
    setTodos([todo, ...todos]);
    console.log(todo + '  добавлен');
  }
  return (
    <div>
      <h1>Что хотите сегодня сделать?</h1>
      <TodoForm onSubmit={addNewtodo}/>
    </div>
  )
}

export default TodoList
