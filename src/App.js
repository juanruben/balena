import * as React from 'react';
import schema from './schema';
import Form from './Form';

const App = () => {
    const { properties } = schema;

    const parseProperties = () => {
        let props = [];
        for(const prop in properties){
            props.push({id: prop, value: properties[prop]});
        }
        return props;
    };

    const controls = parseProperties();

    return <Form title={schema.title} controls={controls} />;
}

export default App;
