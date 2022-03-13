import React from 'react'

export const Alerta = ({ mensaje, stylo }) => {
    return (
        <div className={`alert alert-${stylo} text-center mt-4`} role="alert" >
            {mensaje}
        </div >
    )
}
