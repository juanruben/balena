import React from 'react';
import { tw } from 'twind';

const InputSelect = ({id, label, description, examples, errors, options, inputRef}) => {
    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            <select name={id} id={id} ref={inputRef} className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}>
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
