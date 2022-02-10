import React, { useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../hooks/useCounter'

export default function MemoHook() {

    const { counter, increment } = useCounter(150);
    const [show, setShow] = useState(true)
    const memoPesado = useMemo(() => procesoPesado(counter), [counter]);
    const [state, setState] = useState(0);
    const handleIncrement = () => {
        setState(state + 1);
    }

    return (
        <div className='p-5'>
            {memoPesado}

            <h1>Contador dos : {state}</h1>

            <hr />
            <button
                className='btn btn-outline-dark btn-lg'
                onClick={increment}
            >
                Incrementar
            </button>

            <button
                className='ml-5 btn btn-danger btn-lg'
                onClick={handleIncrement}
            >
                Incrementar x
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
