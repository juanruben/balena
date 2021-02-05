import React from 'react';

const InputSelect = ({id, label, description, examples, errors, options, inputRef}) => {
    return (
        <>
            <label htmlFor={id} style={{display: 'block'}}>{label}</label>
            <select name={id} id={id} ref={inputRef} >
                {options.map((option) => (
                    <option key={option.const} value={option.const}>{option.title}</option>
                ))}
            </select>
            {description}
            {examples?.map((item) => <div key={item}>{item}</div>)}
            {errors[id] && <div>This field is required</div>}
        </>
    );
};

export default InputSelect;
