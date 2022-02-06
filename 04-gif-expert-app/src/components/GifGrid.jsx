import React from 'react';
import { useGetFetchGif } from '../hooks/useGetFetchGif';
import { GifGridItem } from './GifGridItem';


const GifGrid = ({ categoria }) => {

    const { data: images } = useGetFetchGif(categoria);

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
