import React, {useState} from 'react';
import {RiEdit2Fill} from 'react-icons/ri';
import {CgClose} from 'react-icons/cg';
import { nanoid } from 'nanoid';
import TodoForm from './TodoForm';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdateTodo = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    })
  }

if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdateTodo} />

  return todos.map((todo, index) => {
    return (<ul 
    className={todo.isComplete ? "todo-row complete" : "todo-row"}
    key = {nanoid(5)}>
      <li
      key={todo.id}
      onClick={() => completeTodo(todo.id)}>
        {todo.text}
        </li>
        <div className="icons">
          <RiEdit2Fill onClick = { () => setEdit({id: todo.id, value: todo.text})}
          className = "edit-icon" />
          <CgClose 
          onClick = { () => removeTodo(todo.id)}
          className = "delete-icon"/>
        </div>

    </ul>
    )
  })

}

export default Todo
