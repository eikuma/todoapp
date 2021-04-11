import React, { useState } from 'react';

const Item = ({ todo, deleteTodo, changeIsDone }) => {
    // const [isDone, setIsDone] = useState(false);

    // console.log(deleteTodo)

    return (
        <li>
            <input type='checkbox' onChange={() => changeIsDone(todo.id)} />
            <span style={{ textDecoration: (todo.isDone ? 'line-through' : 'none') }}>{todo.content}</span>
            <button onClick={() => {
                deleteTodo(todo.id);
            }}>削除</button>
        </li>
    )
}

export default Item;