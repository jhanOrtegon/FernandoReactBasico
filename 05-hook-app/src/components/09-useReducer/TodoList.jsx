import React from 'react'

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className='p-0'>
            {
                todos.map((todo, i) =>
                (
                    <li key={todo.id} >
                        <div className="d-flex justify-content-between align-items-center">
                            <p onClick={() => handleToggle(todo.id)} className={`${todo.done ? 'completed ' : ''}m-0`}>
                                <strong>{i + 1}.  </strong>{todo.desc}</p>
                            <button
                                className='btn btn-danger'
                                onClick={() => handleDelete(todo.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                        <hr />
                    </li>
                ))
            }
        </ul>
    )
}
