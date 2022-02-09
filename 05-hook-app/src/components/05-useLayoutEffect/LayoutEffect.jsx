import React from 'react'
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch'

const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(data);

    const { quote, series } = !!data && data[0];


    return (
        <div className='container p-5'>
            <h1 className='mb-4 text-center text-uppercase'>LayoutEffect</h1>
            <hr />
            <>
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                </blockquote>
                <button
                    className="btn btn-lg btn-success"
                    onClick={increment}>
                    Siguiente quote
                </button>
            </>
        </div>
    )
}

export default LayoutEffect