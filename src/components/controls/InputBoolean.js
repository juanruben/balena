import { tw } from 'twind';
import Label from './Label';
import PropTypes from 'prop-types';

const InputBoolean = ({id, label, description, examples, inputRef}) => (
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

InputBoolean.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    examples: PropTypes.instanceOf(Array),
    inputRef: PropTypes.elementType.isRequired
};

InputBoolean.defaultProps = {
    label: '',
    description: null,
    examples: null,
};

export default InputBoolean;
