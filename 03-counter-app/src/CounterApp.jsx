import React, { useState } from 'react';
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0);

    const sumarUno = (e) => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <h2>{value}</h2>
            <hr />
            <button onClick={sumarUno}>+1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;