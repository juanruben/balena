import React from 'react';

const InputString = ({id, label, description, examples, errors, inputRef, type, minLength, maxLength}) => {
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
            {examples?.map((item) => <div key={item}>{item}</div>)}
            {minLength || null}
            {maxLength || null}
            {errors[id] && <div>This field is required</div>}
        </>
    );
};

export default InputString;
