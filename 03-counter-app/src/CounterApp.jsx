import React from 'react';
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const sumarUno = (e) => {
        console.log(e);
    }

    return (
        <>
            <h1>Counter App</h1>
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