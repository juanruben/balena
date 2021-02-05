import { tw } from 'twind';
import Tooltip from './Tooltip';

const InputString = ({id, label, description, examples, errors, inputRef, type, minLength, maxLength}) => {
    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            {(description || examples || minLength || maxLength) && (
                <Tooltip id={`${id}-tooltip`}>
                    <div>{description}</div>
                    <div>{examples?.map((item) => <div key={item}>{item}</div>)}</div>
                    <div>{minLength && `Minimum length: ${minLength}`}</div>
                    <div>{maxLength && `Maximum length: ${maxLength}`}</div>
                </Tooltip>
            )}
            <input
                name={id}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                ref={inputRef}
                className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}
            />
            {errors[id] && <div className={tw`text-red-500 text-right text-xs font-light`}>This field is required</div>}
        </>
    );
};

export default InputString;
