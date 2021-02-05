import * as React from 'react';
import schema from './schema';
import Form from './Form';

const App = () => {
    const { properties } = schema;

    const parseProperties = () => {
        return Object.keys(properties).map((id) => ({id, value: properties[id]}));
    };

    const controls = parseProperties();

    return <Form title={schema.title} controls={controls} />;
}

export default App;
