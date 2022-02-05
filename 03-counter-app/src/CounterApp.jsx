import React, { useState } from 'react';
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {

    const [counter, setCounter] = useState(value);

    const sumarUno = (e) => {
        setCounter(counter + 1)
    }

    const restarUno = (e) => {
        setCounter(counter - 1)
    }

    const reset = (e) => {
        setCounter(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <hr />
            <button onClick={sumarUno}>+1</button>
            <button onClick={reset}>Resetear</button>
            <button onClick={restarUno}>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;