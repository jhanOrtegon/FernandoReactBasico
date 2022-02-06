import React from 'react';

export const GifGridItem = ({ title, enlace }) => (
    <div className='card animate__animated animate__bounceIn animate__delay-0.3s'>
        <img src={enlace} alt={title} />
        <p>{title}</p>
    </div>
);
