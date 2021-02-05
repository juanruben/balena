import * as React from 'react';
import { useForm } from 'react-hook-form';
import InputArray from './InputArray';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

const Form = ({title, controls}) => {

    const { register, handleSubmit, setValue, errors } = useForm();

    const filterArrayControls = (controls) => {
        return controls.filter((item) => item.value.type === 'array');
    };

    const getControl =(item) => {
        switch(item.value.type){
            case 'number':
                return (
                    <InputNumber
                        id={item.id}
                        label={item.value.title || item.id}
                        inputRef={register({ required: true })}
                        errors={errors}
                    />
                );
            case 'string':
                if (item.value.oneOf?.length) {
                    return (
                        <InputSelect
                            id={item.id}
                            label={item.value.title || item.id}
                            inputRef={register({ required: true })}
                            options={item.value.oneOf}
                            errors={errors}
                        />
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
                            <InputArray
                                id={item.id}
                                label={item.value.title || item.id}
                                setValue={setValue}
                                inputRef={register}
                                errors={errors}
                            />
                        );
                    }
                    return null;
            default:
                return null;
        }
    };

    const arrayControls = filterArrayControls(controls);

    React.useState(() => {
        arrayControls.map((item) => {
            register({ name: item.id }, { required: true });
            return null;
        });
    }, [arrayControls]);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <h1>{title}</h1>
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

export default Form;
