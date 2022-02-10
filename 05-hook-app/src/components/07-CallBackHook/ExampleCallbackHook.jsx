import React from 'react'

const ExampleCallbackHook = React.memo(({ callback }) => {

    console.log("ejecutando esta parte del componente ExampleCallbackHook");
    console.log("ejecutando esta parte del componente ExampleCallbackHook 1");
    console.log("ejecutando esta parte del componente ExampleCallbackHook 114");

    return (
        <button
            className='btn btn-lg btn-primary'
            onClick={callback}
        >
            Increment
        </button>
    )
})

export default ExampleCallbackHook
