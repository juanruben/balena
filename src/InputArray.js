import * as React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const InputArray = ({id, label, setValue, errors}) => {
    const [tags, setTags] = React.useState([])

    const handleChange = (newTags) => {
        setTags(newTags);
        setValue(id, newTags);
    }

    return (
        <label htmlFor={id}>{label}
            <ReactTagInput
                id={id}
                name={id}
                tags={tags}
                onChange={handleChange}
            />
            {errors[id] && <span>This field is required</span>}
        </label>
    );
}

export default InputArray;
