import { tw } from 'twind';
import Label from './Label';
import ErrorMessage from './ErrorMessage';
import PropTypes from 'prop-types';

const InputSelect = ({id, label, description, examples, errors, options, inputRef}) => (
    <>
        <Label id={id} text={label} description={description} examples={examples} />
        <select name={id} id={id} ref={inputRef} className={tw`border py-2 px-3 rounded-md w-full`} defaultValue="">
            <option value="" disabled>Select...</option>
            {options.map((option) => (
                <option key={option.const} value={option.const}>{option.title}</option>
            ))}
        </select>
        <ErrorMessage id={id} errors={errors} />
    </>
);

InputSelect.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    examples: PropTypes.instanceOf(Array),
    errors: PropTypes.instanceOf(Object),
    options: PropTypes.instanceOf(Array),
    inputRef: PropTypes.elementType.isRequired
};

InputSelect.defaultProps = {
    label: '',
    description: null,
    examples: null,
    options: [],
    errors: {},
};

export default InputSelect;
