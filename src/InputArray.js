import * as React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { tw } from 'twind';
import Tooltip from './Tooltip';

const InputArray = ({id, label, setValue, description, examples, errors}) => {
    const [tags, setTags] = React.useState([])

    const handleChange = (newTags) => {
        setTags(newTags);
        setValue(id, newTags);
    }

    return (
        <>
            <label htmlFor={id} className={tw`text-sm`}>{label}</label>
            {(description || examples) && (
                <Tooltip id={`${id}-tooltip`}>
                    <div>{description}</div>
                    <div>{examples?.map((item) => <div key={item}>{item}</div>)}</div>
                </Tooltip>
            )}
            <ReactTagInput
                id={id}
                name={id}
                tags={tags}
                onChange={handleChange}
            />
            {errors[id] && <div className={tw`text-red-500 text-right text-xs font-light`}>This field is required</div>}
        </>
    );
}

export default InputArray;
