import React from 'react';

const InputNumber = ({id, label, description, examples, errors, inputRef}) => {
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
            {examples?.map((item) => <div key={item}>{item}</div>)}
            {errors[id] && <div>This field is required</div>}
        </>
    );
};

export default InputNumber;
