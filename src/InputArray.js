import * as React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import Label from './Label';
import ErrorMessage from './ErrorMessage';

const InputArray = ({id, label, setValue, description, examples, errors}) => {
    const [items, setItems] = React.useState([])

    const handleChange = (newTags) => {
        setItems(newTags);
        setValue(id, newTags);
    }

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
            <ErrorMessage id={id} errors={errors} />
        </>
    );
}

export default InputArray;
