import React, {useState} from 'react';
import {RiEdit2Fill} from 'react-icons/ri';
import {CgClose} from 'react-icons/cg';
import { nanoid } from 'nanoid';

function Todo({todos, completeTodo, removeTodo}) {

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

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
          className = "edit-icon"
          /><br />
          <CgClose 
          onClick = { () => removeTodo(todo.id)}
          className = "delete-icon"/>
        </div>

    </ul>
    )
  })

}

export default Todo
