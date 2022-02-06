import React from 'react';
import { useGetFetchGif } from '../hooks/useGetFetchGif';
import { GifGridItem } from './GifGridItem';


const GifGrid = ({ categoria }) => {

    const { data: images, loading } = useGetFetchGif(categoria);
    console.log(loading);
    return (
        <>
            {loading && <p>CARGANDO....</p>}
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
