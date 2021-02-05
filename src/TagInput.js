import * as React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const TagInput = ({id, name, setValue}) => {
    const [tags, setTags] = React.useState([])

    const handleChange = (newTags) => {
        setTags(newTags);
        setValue(name, newTags);
    }

    return (
        <ReactTagInput
            id={id}
            name={name}
            tags={tags}
            onChange={handleChange}
        />
    );
}

export default TagInput;
