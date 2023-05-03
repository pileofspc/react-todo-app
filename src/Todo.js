import React from 'react';
import './todo.scss';

export default function Todo({ todo, toggleTodo }) {
    let defaultName = 'Todo';

    function handleOnChange() {
        toggleTodo(todo.id)
    }
    
    return (
        <label className='todo'>
            <input type="checkbox" checked={todo.isChecked} onChange={handleOnChange} />{todo.name || defaultName}
        </label>
    )
}