import schema from './schema';

const App = () => {

    const { properties } = schema;

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
                    <>
                        <label htmlFor={item.id}>{item.value.title || item.id}</label>
                        <input name={item.id} id={item.id} type="number" />
                        {item.value.description}
                    </>
                );
            case 'string':
                return (
                    <>
                        <label htmlFor={item.id}>{item.value.title || item.id}</label>
                        <input type="text" minLength={item.value.minLength} maxLength={item.value.maxLength}/>
                        {item.value.description}
                    </>
                );
            default:
                return null;
        }
    };

    const controls = getProperties();

    return (
        <>
            <h1>{schema.title}</h1>
            <form>
                {controls.map((item) => (
                    <div>
                        {getControl(item)}
                    </div>
                ))}
                <input type="submit" />
            </form>
        </>
    );
}

export default App;
