import { tw } from 'twind';
import Label from './Label';

const InputString = ({id, label, description, examples, errors, inputRef, type, minLength, maxLength}) => {
    return (
        <>
            <Label id={id} text={label} description={description} examples={examples}>
                    {minLength && <div><b>Minimum length: </b>{minLength}</div>}
                    {maxLength && <div><b>Maximum length: </b>{maxLength}</div>}
            </Label>
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
