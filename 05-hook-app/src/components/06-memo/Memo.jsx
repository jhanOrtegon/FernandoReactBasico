import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
import { Messaje } from './Messaje';

export default function Memo() {

    const { counter, increment } = useCounter(0);
    const [show, setShow] = useState(true)

    return (
        <div className='p-5'>
            <Messaje counter={counter} />
            <hr />
            <button
                className='btn btn-outline-dark btn-lg'
                onClick={increment}
            >
                Incrementar
            </button>

            <button
                className='mx-4 btn btn-outline-warning btn-lg'
                onClick={() => setShow(!show)}
            >
                hide/show = {JSON.stringify(show)}
            </button>


        </div>
    )
}
