import { useState, useEffect } from 'react';
import getFetchGif from "../helpers/getFetchGif";

export const useGetFetchGif = (categoria) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getFetchGif(categoria)
            .then(e => {
                setstate({
                    data: e,
                    loading: false
                })
            })
    }, [categoria])

    return state;

};
