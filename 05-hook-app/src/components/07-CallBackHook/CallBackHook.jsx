import React, { useState, useCallback } from 'react';
import ExampleCallbackHook from './ExampleCallbackHook';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const handleIncrement = useCallback(() => {
        setCounter(e => e + 1);
    }, [setCounter])

    return (
        <div className='p-5'>
            <h1>CallBackHook counter = {counter}</h1>
            <hr />
            <ExampleCallbackHook callback={handleIncrement} />

        </div>
    )
}
