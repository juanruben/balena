import * as React from 'react';
import { useForm } from 'react-hook-form';
import InputArray from 'components/controls/InputArray';
import InputNumber from 'components/controls/InputNumber';
import InputString from 'components/controls/InputString';
import InputSelect from 'components/controls/InputSelect';
import { tw } from 'twind';

const Form = ({title, controls, handleAfterSubmit}) => {
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
        // ... Actual data submitting
        alert('Sent');
        handleAfterSubmit(data);
    }

    return (
        <div>
            <h1 className={tw`text-4xl text-blue-400 border-b-1 pb-5 mb-10 border-blue-400`}>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {controls.map((item) => (
                    <div key={item.id} style={{paddingBottom: '10px'}}>
                        {getControl(item)}
                    </div>
                ))}
                <input
                    type="submit"
                    className={tw`cursor-pointer bg-blue-400 text-white text-lg px-6 py-2 rounded mt-10 hover:bg-blue-700`}
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default Form;