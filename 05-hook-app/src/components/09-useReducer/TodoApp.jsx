import React, { useReducer } from 'react'
import todoReducer from './todoReducer';
import "./TodoApp.css"
const TodoApp = () => {

    const initial_state = [{
        id: new Date().getTime(),
        desc: "Aprendiendo React",
        done: false
    }]

    const [todos, dispacher] = useReducer(todoReducer, initial_state);

    const handleSubmit = e => {
        e.preventDefault();
        let valorInput = e.target.inputTodo.value;
        if (!valorInput.trim()) {
            alert("digita un valor correcto");
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: valorInput,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        dispacher(action)
        console.log("xxx");
        
        e.target.inputTodo.value = ""
    }

    return (
        <div className='container p-5'>
            <h1>TODO APP ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <ul className='p-0'>
                        {
                            todos.map((todo, i) =>
                            (
                                <li key={todo.id} >
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className='m-0'><strong>{i + 1}.  </strong>{todo.desc}</p>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </div>
                                    <hr />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-7">
                    <h3>Agregar TODO</h3>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='form-control' name='inputTodo' />
                        <button
                            type='submit'
                            className='btn btn-success text-center w-100 mt-2'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp
