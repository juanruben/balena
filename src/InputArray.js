import * as React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { tw } from 'twind';

const InputArray = ({id, label, setValue, description, examples, errors}) => {
    const [tags, setTags] = React.useState([])

    const handleChange = (newTags) => {
        setTags(newTags);
        setValue(id, newTags);
    }

    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            <ReactTagInput
                id={id}
                name={id}
                tags={tags}
                onChange={handleChange}
            />
            {description}
            {examples?.map((item) => <div key={item}>{item}</div>)}
            {errors[id] && <div>This field is required</div>}
        </>
    );
}

export default InputArray;
