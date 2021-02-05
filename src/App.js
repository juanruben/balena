import * as React from 'react';
import schema from './schema';
import Form from './Form';
import Output from './Output';
import { tw } from 'twind';

const parseProperties = (properties) => {
    return Object.keys(properties).map((id) => ({id, value: properties[id]}));
};

const App = () => {
    const { type, title, properties } = schema;
    const [data, setData] = React.useState(null);

    if (type === 'object' && properties) {
        const controls = parseProperties(properties);

        const handleAfterSubmit = (data) => {
            setData(JSON.stringify(data, null, 4));
        }

        return (
            <div className={tw`bg-gray-100 py-20`}>
                <div className={tw`container mx-auto grid grid-cols-2 gap-4`}>
                    <div className={tw`bg-white shadow-xl rounded-lg p-10`}>
                        <Form title={title} controls={controls} handleAfterSubmit={handleAfterSubmit}/>
                    </div>
                    <div className={tw`bg-white shadow-xl rounded-lg p-10`}>
                        <Output data={data} />
                    </div>
                </div>
            </div>
        );
    }

    return <i>Nothing to render</i>
}

export default App;
