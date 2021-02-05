import React from 'react';
import { tw } from 'twind';

const InputString = ({id, label, description, examples, errors, inputRef, type, minLength, maxLength}) => {
    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            <input
                name={id}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                ref={inputRef}
                className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}
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
