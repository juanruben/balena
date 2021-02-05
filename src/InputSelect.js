import { tw } from 'twind';
import Label from './Label';

const InputSelect = ({id, label, description, examples, errors, options, inputRef}) => {
    return (
        <>
            <Label id={id} text={label} description={description} examples={examples} />
            <select name={id} id={id} ref={inputRef} className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}>
                {options.map((option) => (
                    <option key={option.const} value={option.const}>{option.title}</option>
                ))}
            </select>
            {errors[id] && <div className={tw`text-red-500 text-right text-xs font-light`}>This field is required</div>}
        </>
    );
};

export default InputSelect;
