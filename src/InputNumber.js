import { tw } from 'twind';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

const InputNumber = ({id, label, description, examples, errors, inputRef}) => {
    return (
        <>
            <Label id={id} text={label} description={description} examples={examples} />
            <input
                name={id}
                id={id}
                type="number"
                min="0"
                ref={inputRef}
                className={tw`border py-2 px-3 text-grey-darkest rounded-md w-full`}
            />
            <ErrorMessage id={id} errors={errors} />
        </>
    );
};

export default InputNumber;
