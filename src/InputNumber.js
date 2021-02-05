import React from 'react';

const InputNumber = ({id, label, description, errors, inputRef}) => {
    return (
        <>
            <label htmlFor={id} style={{display: 'block'}}>{label}</label>
            <input
                name={id}
                id={id}
                type="number"
                min="0"
                ref={inputRef}
            />
            {description}
            {errors[id] && <span>This field is required</span>}
        </>
    );
};

export default InputNumber;
