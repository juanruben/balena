import * as React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { tw } from 'twind';
import Label from './Label';

const InputArray = ({id, label, setValue, description, examples, errors}) => {
    const [tags, setTags] = React.useState([])

    const handleChange = (newTags) => {
        setTags(newTags);
        setValue(id, newTags);
    }

    return (
        <>
            <Label id={id} text={label} description={description} examples={examples} />
            <ReactTagInput
                id={id}
                name={id}
                tags={tags}
                onChange={handleChange}
                removeOnBackspace
            />
            {errors[id] && <div className={tw`text-red-500 text-right text-xs font-light`}>This field is required</div>}
        </>
    );
}

export default InputArray;
