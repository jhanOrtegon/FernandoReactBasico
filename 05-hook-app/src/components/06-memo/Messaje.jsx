import React from 'react'

export const Messaje = React.memo(({ counter }) => {

    console.log("Me Volvi a llamar :C ");

    return (
        <p>Contador de Memos: <strong>{counter}</strong></p>
    )
})
