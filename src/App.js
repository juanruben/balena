import * as React from 'react';
import schema from './schema';
import Form from './Form';
import { tw } from 'twind';

const parseProperties = (properties) => {
    return Object.keys(properties).map((id) => ({id, value: properties[id]}));
};

const App = () => {
    const { type, title, properties } = schema;

    if (type === 'object' && properties) {
        const controls = parseProperties(properties);

        return (
            <div className={tw`bg-gray-100 py-20`}>
                <div className={tw`container mx-auto bg-white flex justify-around shadow-xl rounded-lg p-10`}>
                    <Form title={title} controls={controls} />
                </div>
            </div>
        );
    }

    return <i>Nothing to render</i>
}

export default App;
