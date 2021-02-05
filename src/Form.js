import * as React from 'react';
import { useForm } from 'react-hook-form';
import InputArray from './InputArray';
import InputNumber from './InputNumber';
import InputString from './InputString';
import InputSelect from './InputSelect';

const Form = ({title, controls}) => {
    const { register, handleSubmit, setValue, errors } = useForm();

    const filterArrayControls = (controls) => {
        return controls.filter((item) => item.value.type === 'array');
    };

    const getControl =(item) => {
        const {id, value} = item;
        switch(value.type){
            case 'number':
                return (
                    <InputNumber
                        id={id}
                        label={value.title || id}
                        inputRef={register({ required: true })}
                        description={value.description}
                        examples={value.examples}
                        errors={errors}
                    />
                );
            case 'string':
                if (value.oneOf?.length) {
                    return (
                        <InputSelect
                            id={id}
                            label={value.title || id}
                            inputRef={register({ required: true })}
                            options={value.oneOf}
                            description={value.description}
                            examples={value.examples}
                            errors={errors}
                        />
                    );
                }
                return (
                    <InputString
                        id={id}
                        label={value.title || id}
                        inputRef={register({ required: true })}
                        minLength={value.minLength}
                        maxLength={value.maxLength}
                        description={value.description}
                        examples={value.examples}
                        type={value.format === 'date-time' ? "date" : "text"}
                        errors={errors}
                    />
                );
            case 'array':
                    if (value.items?.type === 'string'){
                        return (
                            <InputArray
                                id={id}
                                label={value.title || id}
                                setValue={setValue}
                                inputRef={register}
                                description={value.description}
                                examples={value.examples}
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
