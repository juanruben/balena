import { tw } from 'twind';
import Tooltip from './Tooltip';
import Info from './Info';

const InputNumber = ({id, label, description, examples, errors, inputRef}) => {
    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            {(description || examples) && (
                <Tooltip id={`${id}-tooltip`}>
                    <Info description={description} examples={examples} />
                </Tooltip>
            )}
            <input
                name={id}
                id={id}
                type="number"
                min="0"
                ref={inputRef}
                className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}
            />
            {errors[id] && <div className={tw`text-red-500 text-right text-xs font-light`}>This field is required</div>}
        </>
    );
};

export default InputNumber;
