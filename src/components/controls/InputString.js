import { tw } from 'twind';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

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
                className={tw`border py-2 px-3 rounded-md w-full`}
            />
            <ErrorMessage id={id} errors={errors} />
        </>
    );
};

export default InputString;
