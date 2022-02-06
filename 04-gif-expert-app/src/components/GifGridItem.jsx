import React from 'react';

export const GifGridItem = ({ title, enlace }) => (
    <div className='card'>
        <img src={enlace} alt={title} />
        <p>{title}</p>
    </div>
);
