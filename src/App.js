import * as React from 'react';
import schema from './schema';
import Form from './Form';

const parseProperties = (properties) => {
    return Object.keys(properties).map((id) => ({id, value: properties[id]}));
};

const App = () => {
    const { type, title, properties } = schema;

    if (type === 'object' && properties) {
        const controls = parseProperties(properties);

        return <Form title={title} controls={controls} />;
    }

    return <i>Nothing to render</i>
}

export default App;
