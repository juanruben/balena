import * as React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import Label from './Label';
import ErrorMessage from './ErrorMessage';
import PropTypes from 'prop-types';

const InputArray = ({id, label, setValue, description, examples, errors, required}) => {
    const [items, setItems] = React.useState([])

    const handleChange = (newTags) => {
        setItems(newTags);
    }

    React.useEffect(() => {
        setValue(id, items.length ? items : null);
    }, [id, items, setValue])

    return (
        <>
            <Label id={id} text={label} description={description} examples={examples} />
            <ReactTagInput
                id={id}
                name={id}
                tags={items}
                onChange={handleChange}
                removeOnBackspace
            />
            {required && !items.length ? <ErrorMessage id={id} errors={errors} /> : null}
        </>
    );
}

InputArray.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    setValue: PropTypes.func,
    description: PropTypes.string,
    examples: PropTypes.instanceOf(Array),
    errors: PropTypes.instanceOf(Object),
    required: PropTypes.bool,
};

InputArray.defaultProps = {
    label: '',
    setValue: null,
    description: null,
    examples: null,
    errors: {},
    required: true,
};

export default InputArray;
