import React, { useReducer, useState, useEffect } from 'react'
import todoReducer from './todoReducer';
import "./TodoApp.css"
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispacher] = useReducer(todoReducer, [], init);

    const [inputValor, setInputValor] = useState({ inputTodo: '' });

    const handleChange = ({ target }) => setInputValor({ ...inputValor, [target.name]: target.value });

    const handleSubmit = e => {
        e.preventDefault();

        if (!inputValor.inputTodo.trim().length) {
            alert("digita un valor correcto")
            return
        }

        dispacher({
            type: 'add',
            payload: {
                id: new Date().getTime(),
                desc: inputValor.inputTodo,
                done: false
            }
        });

        setInputValor({ inputTodo: '' });
    }

    const handleDelete = id => dispacher({ type: 'delete', payload: id });
    const handleToggle = id => dispacher({ type: 'toggle', payload: id });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='container p-5'>
            <h1>TODO APP ({todos.length}) </h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                </div>
                <div className="col-7">
                    <TodoAdd handleSubmit={handleSubmit} handleChange={handleChange} inputValor={inputValor} />
                </div>
            </div>
        </div >
    )
}

export default TodoApp
