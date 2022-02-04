import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo }) => {

    const mensaje = "Hola Mundo";

    return (
        <>
            <h1>{mensaje}</h1>
            <h2>mi primera aplicacion con react</h2>
            <hr />
            <p>{saludo}</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludo: "soy un saludo X"
}

export default PrimeraApp;