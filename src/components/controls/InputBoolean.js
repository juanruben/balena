import { tw } from 'twind';
import Label from './Label';

const InputBoolean = ({id, label, description, examples, inputRef}) => {
    return (
        <>
            <Label id={id} text={label} description={description} examples={examples} />
            <input
                name={id}
                id={id}
                type="checkbox"
                ref={inputRef}
                className={tw`m-4`}
            />
        </>
    );
};

export default InputBoolean;
