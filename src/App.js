import schema from './schema';
import { useForm } from 'react-hook-form';

const App = () => {

    const { properties } = schema;

    const { register, handleSubmit } = useForm();

    const getProperties = () => {
        let props = [];
        for(const prop in properties){
            props.push({id: prop, value: properties[prop]});
        }
        return props;
    };

    const getControl =(item) => {
        switch(item.value.type){
            case 'number':
                return (
                    <label htmlFor={item.id}>{item.value.title || item.id}
                        <input name={item.id} id={item.id} type="number" min="0" ref={register} />
                        {item.value.description}
                    </label>
                );
            case 'string':
                return (
                    <label htmlFor={item.id}>{item.value.title || item.id}
                        <input
                            name={item.id}
                            type={item.value.format === 'date-time' ? "date" : "text"}
                            minLength={item.value.minLength}
                            maxLength={item.value.maxLength}
                            ref={register}
                        />
                        {item.value.description}
                    </label>
                );
            default:
                return null;
        }
    };

    const onSubmit = data => console.log(data);

    const controls = getProperties();

    return (
        <>
            <h1>{schema.title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {controls.map((item) => (
                    <div style={{paddingBottom: '10px'}}>
                        {getControl(item)}
                    </div>
                ))}
                <input type="submit" />
            </form>
        </>
    );
}

export default App;
