import * as React from 'react';
import schema from './schema';
import Form from './Form';

const App = () => {
    const { properties } = schema;

    const getProperties = () => {
        let props = [];
        for(const prop in properties){
            props.push({id: prop, value: properties[prop]});
        }
        return props;
    };

    const controls = getProperties();

    return <Form title={schema.title} controls={controls} />;
}

export default App;
