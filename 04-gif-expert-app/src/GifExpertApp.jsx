import React from 'react';
import { useState } from 'react/cjs/react.development';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {
                categories.map((categoria) => (
                    <GifGrid key={categoria} categoria={categoria} />
                ))
            }
        </>
    )
};


export {
    GifExpertApp as default,
} 