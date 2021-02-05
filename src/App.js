import * as React from 'react';
import schema from './schema';
import { useForm } from 'react-hook-form';
import TagInput from './TagInput';

const App = () => {
    const { properties } = schema;

    const { register, handleSubmit, setValue, errors } = useForm();

    const getProperties = () => {
        let props = [];
        for(const prop in properties){
            props.push({id: prop, value: properties[prop]});
        }
        return props;
    };

    const getArrayControls = (controls) => {
        return controls.filter((item) => item.value.type === 'array');
    };

    const getControl =(item) => {
        switch(item.value.type){
            case 'number':
                return (
                    <label htmlFor={item.id}>{item.value.title || item.id}
                        <input name={item.id} id={item.id} type="number" min="0" ref={register({ required: true })} />
                        {item.value.description}
                        {errors[item.id] && <span>This field is required</span>}
                    </label>
                );
            case 'string':
                if (item.value.oneOf?.length) {
                    return (
                        <label htmlFor={item.id}>{item.value.title || item.id}
                            <select name={item.id} id={item.id} ref={register({ required: true })} >
                                {item.value.oneOf.map((option) => (
                                    <option key={option.const} value={option.const}>{option.title}</option>
                                ))}
                            </select>
                            {errors[item.id] && <span>This field is required</span>}
                        </label>
                    );
                }
                return (
                    <label htmlFor={item.id}>{item.value.title || item.id}
                        <input
                            name={item.id}
                            type={item.value.format === 'date-time' ? "date" : "text"}
                            minLength={item.value.minLength}
                            maxLength={item.value.maxLength}
                            ref={register({ required: true })}
                        />
                        {item.value.description}
                        {errors[item.id] && <span>This field is required</span>}
                    </label>
                );
            case 'array':
                    if (item.value.items?.type === 'string'){
                        return (
                            <label htmlFor={item.id}>{item.value.title || item.id}
                                <TagInput
                                    id={item.id}
                                    name={item.id}
                                    setValue={setValue}
                                    inputRef={register}
                                />
                                {errors[item.id] && <span>This field is required</span>}
                            </label>
                        );
                    }
                    return null;
            default:
                return null;
        }
    };

    const onSubmit = (data) => {
        console.log(data);
    }

    const controls = getProperties();

    const arrayControls = getArrayControls(controls);

    React.useState(() => {
        arrayControls.map((item) => {
            register({ name: item.id }, { required: true });
            return null;
        });
    }, [arrayControls]);

    return (
        <>
            <h1>{schema.title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {controls.map((item) => (
                    <div key={item.id} style={{paddingBottom: '10px'}}>
                        {getControl(item)}
                    </div>
                ))}
                <input type="submit" />
            </form>
        </>
    );
}

export default App;
