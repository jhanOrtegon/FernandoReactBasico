import React, { useEffect } from 'react';

const Messaje = () => {

    useEffect(() => {
        console.log("init");
        return () => {
            console.log("fin");
        };
    }, []);

    return (
        <div>
            <h1>Hola Mundo</h1>
        </div>
    )
}

export default Messaje
