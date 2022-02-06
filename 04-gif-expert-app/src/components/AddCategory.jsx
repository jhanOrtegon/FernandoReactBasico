import React from 'react';
import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState("");
    const handleChangeInputValue = ({ target: { value } }) => setinputValue(value)
    const handleFormSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length) {
            setCategories(categories => [inputValue]);
            setinputValue("");
            return;
        }
        alert("digita una categoria validad")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder='agrega tu Categoria'
                value={inputValue}
                onChange={handleChangeInputValue}
            />
        </form>
    );
};

AddCategory.propTypes = {
    'setCategories': PropTypes.func.isRequired
}


