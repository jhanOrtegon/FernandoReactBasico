import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100)

    return (
        <div className='text-center mt-5'>
            <h1>Counter With Hook {state}</h1>
            <hr />
            <button
                onClick={increment}
                className='btn btn-lg btn-dark mr-2'> +1
            </button>

            <button
                onClick={reset}
                className='btn btn-lg btn-success mr-2'> RESET
            </button>

            <button
                onClick={decrement}
                className='btn btn-lg btn-danger mr-2'> -1
            </button>
        </div>

    )
}

export default CounterWithCustomHook
