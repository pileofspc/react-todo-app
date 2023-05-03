import React, { useState, useRef, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';


const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function TodoWidget() {
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    let renderedTodos = todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>);

    const inputRef = useRef();

    function handleAddTodo() {
        const name = inputRef.current.value;
        let newTodo = {
            id: uuidv4(),
            name: name,
            isChecked: false
        };
        setTodos(
            prev => [...prev, newTodo]
        );
        inputRef.current.focus();
        inputRef.current.value = '';
    }

    function handleClearComplete() {
        const filtered = [...todos].filter(todo => todo.isChecked === false);
        setTodos(filtered);
    }

    function toggleTodo(id) {
        const newState = [...todos];
        const todo = newState.find(todo => todo.id === id);

        if (todo.isChecked) {
            todo.isChecked = false
        } else {
            todo.isChecked = true
        }

        setTodos(newState);
    }

    return (
        <>
            <h3>Todo List</h3>
            <input ref={inputRef} type="text"/>
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleClearComplete}>Clear Complete</button>
            {renderedTodos}
            <div>{renderedTodos.length} left to do</div>
        </>
    )
}
