import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';


const GifGrid = ({ categoria }) => {

    const [images, setimages] = useState([]);

    const getGifs = async () => {
        const api_key = "rz2Ry3Nzml0qMQQ31d09Qkfyx0sWLimq";
        const busqueda = categoria
        const limite = 10;
        const url = `https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=${limite}&api_key=${api_key}`
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(e => (
            {
                id: e.id,
                enlace: e.images.original.url,
                title: e.title
            }
        ));

        console.log(gifs);
        setimages(gifs);

    }

    useEffect(() => {
        getGifs()
    }, [])

    return (
        <>
            <h3>{categoria}</h3>

            <div id="items">
                {
                    images.map(e => (
                        <GifGridItem key={e.id} {...e} />
                    ))
                }
            </div>

        </>
    )
}




export default GifGrid;
