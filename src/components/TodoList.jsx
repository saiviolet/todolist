import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

  //стейт для списка дел, изначально пустой массив
  const [todos, setTodos] = useState([]);
  //колбэк при отправке формы
  const addNewTodo = todo => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  }

  const updateTodo = (id, newValue) => {
    setTodos(old => old.map(oldTodo => (oldTodo.id === id ? newValue : oldTodo)));
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <div>
      <h1>Что хотите сегодня сделать?</h1>
      <TodoForm onSubmit={addNewTodo}/>
      <Todo 
      todos = {todos}
      completeTodo = {completeTodo} 
      removeTodo = {removeTodo}
      updateTodo = {updateTodo}/>
    </div>
  )
}

export default TodoList
