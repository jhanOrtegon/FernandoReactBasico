import { useState, useEffect, useRef } from 'react'

const useFetch = (enpoint) => {

    const [state, setState] = useState({
        error: null,
        loading: true,
        data: null
    });

    const isMounted = useRef(true);

    useEffect(() => {

        return () => {
            isMounted.current = false;
        };

    }, []);


    useEffect(() => {

        setState({
            error: null,
            loading: true,
            data: null
        });

        fetch(enpoint)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    })
                }
            })
    }, [enpoint]);


    return state;
}

export default useFetch
