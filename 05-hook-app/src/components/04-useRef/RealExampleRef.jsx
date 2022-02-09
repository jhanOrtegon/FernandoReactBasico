import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {

    const [show, setShow] = useState(false);
    const handleHideShow = () => setShow(!show);

    return (
        <div className='p-5'>
            <h1>RealExampleRef</h1>
            <hr />
            {
                show && <MultipleCustomHooks />
            }
            <button
                className='btn btn-dark btn-lg float-right'
                onClick={handleHideShow}
            >
                Mostrar/Ocultar</button>
        </div>
    )
}

export default RealExampleRef
