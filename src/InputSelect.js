import React from 'react';

const InputSelect = ({id, label, description, errors, options, inputRef}) => {
    return (
        <>
            <label htmlFor={id} style={{display: 'block'}}>{label}</label>
            <select name={id} id={id} ref={inputRef} >
                {options.map((option) => (
                    <option key={option.const} value={option.const}>{option.title}</option>
                ))}
            </select>
            {description}
            {errors[id] && <span>This field is required</span>}
        </>
    );
};

export default InputSelect;
