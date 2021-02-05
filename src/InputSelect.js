import { tw } from 'twind';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

const InputSelect = ({id, label, description, examples, errors, options, inputRef}) => {
    return (
        <>
            <Label id={id} text={label} description={description} examples={examples} />
            <select name={id} id={id} ref={inputRef} className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}>
                {options.map((option) => (
                    <option key={option.const} value={option.const}>{option.title}</option>
                ))}
            </select>
            <ErrorMessage id={id} errors={errors} />
        </>
    );
};

export default InputSelect;
