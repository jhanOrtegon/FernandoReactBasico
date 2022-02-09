import React, { useRef } from 'react'

const FocusScren = () => {

    const inputRef = useRef();
    const handleFocus = () => inputRef.current.select();

    return (
        <div className='p-5'>
            <h1>FocusScreen</h1>
            <hr />
            <div className="form-group">
                <input
                    ref={inputRef}
                    type="text"
                    className='form-control'
                    name='name'
                    placeholder='nombre'
                />
            </div>

            <button
                className='btn btn-outline-primary'
                onClick={handleFocus}
            >
                Focus
            </button>

        </div>
    )
}

export default FocusScren
