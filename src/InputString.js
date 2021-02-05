import React from 'react';

const InputString = ({id, label, description, errors, inputRef, type, minLength, maxLength}) => {
    return (
        <>
            <label htmlFor={id} style={{display: 'block'}}>{label}</label>
            <input
                name={id}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                ref={inputRef}
            />
            {description}
            {errors[id] && <span>This field is required</span>}
        </>
    );
};

export default InputString;
