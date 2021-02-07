import { tw } from 'twind';
import Label from './Label';
import ErrorMessage from './ErrorMessage';
import PropTypes from 'prop-types';

const InputNumber = ({id, label, description, examples, errors, inputRef}) => (
    <>
        <Label id={id} text={label} description={description} examples={examples} />
        <input
            name={id}
            id={id}
            type="number"
            min="0"
            ref={inputRef}
            className={tw`border py-2 px-3 rounded-md w-full`}
        />
        <ErrorMessage id={id} errors={errors} />
    </>
);

InputNumber.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    examples: PropTypes.instanceOf(Array),
    errors: PropTypes.instanceOf(Object),
    inputRef: PropTypes.elementType.isRequired
};

InputNumber.defaultProps = {
    label: '',
    description: null,
    examples: null,
    errors: {},
};

export default InputNumber;
