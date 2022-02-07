import React, { useState } from 'react';
import "./counterApp.css";

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
        counter4: 20,
        counter5: 20,
        counter6: 20,
    });

    const { counter1, counter6 } = state

    return (

        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {state.counter2}</h1>
            <h1>Counter {state.counter3}</h1>
            <h1>Counter {state.counter4}</h1>
            <h1>Counter {state.counter5}</h1>
            <h1>Counter {counter6}</h1>
            <hr />
            <button
                onClick={() => setState({
                    ...state,
                    counter6: counter6 + 1
                })}

                className='btn btn-lg btn-primary'>
                +1
            </button>
        </>

    );
};
