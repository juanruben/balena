import { tw } from 'twind';
import Label from './Label';
import ErrorMessage from './ErrorMessage';
import PropTypes from 'prop-types';

const InputString = ({id, label, description, examples, errors, inputRef, type, minLength, maxLength}) => (
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

InputString.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    examples: PropTypes.instanceOf(Array),
    errors: PropTypes.instanceOf(Object),
    inputRef: PropTypes.elementType.isRequired,
    type: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
};

InputString.defaultProps = {
    label: '',
    description: null,
    examples: null,
    errors: {},
    type: 'text',
    minLength: null,
    maxLength: null,
};

export default InputString;
