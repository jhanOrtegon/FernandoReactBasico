import React from 'react'
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch'

const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const { data, error, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(data);

    const { author, quote, quote_id, series } = !!data && data[0];


    return (
        <div className='container p-5'>
            <h1 className='mb-4 text-center text-uppercase'>braking bad quotes</h1>
            <hr />
            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>CARGANDO...</div>
                    )
                    :
                    (
                        <>
                            <blockquote className='blockquote text-right'>
                                <p className='mb-0'>{quote}</p>
                                <p className='mb-0'>{series}</p>
                                <footer className='blockquote-footer'>Jhan Carlos</footer>
                            </blockquote>
                            <button
                                className="btn btn-lg btn-success"
                                onClick={increment}
                            >
                                Siguiente quote</button>
                        </>

                    )
            }
        </div>
    )
}

export default MultipleCustomHooks