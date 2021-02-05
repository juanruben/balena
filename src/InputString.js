import { tw } from 'twind';
import Tooltip from './Tooltip';
import Info from './Info';

const InputString = ({id, label, description, examples, errors, inputRef, type, minLength, maxLength}) => {
    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            {(description || examples || minLength || maxLength) && (
                <Tooltip id={`${id}-tooltip`}>
                    <Info description={description} examples={examples} />
                    {minLength && <div><b>Minimum length: </b>{minLength}</div>}
                    {maxLength && <div><b>Maximum length: </b>{maxLength}</div>}
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
