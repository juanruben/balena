import React from 'react';
import { tw } from 'twind';

const InputNumber = ({id, label, description, examples, errors, inputRef}) => {
    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            <input
                name={id}
                id={id}
                type="number"
                min="0"
                ref={inputRef}
                className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}
            />
            {description}
            {examples?.map((item) => <div key={item}>{item}</div>)}
            {errors[id] && <div>This field is required</div>}
        </>
    );
};

export default InputNumber;
