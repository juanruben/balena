import * as React from 'react';
import Form from 'components/Form';
import Output from 'components/Output';
import { tw } from 'twind';
import PropTypes from 'prop-types';

const parseProperties = (properties) => {
    return Object.keys(properties).map((id) => ({id, value: properties[id]}));
};

const App = ({ schema }) => {
    const { type, title, properties } = schema;
    const [data, setData] = React.useState(null);

    if (type === 'object' && properties) {
        const controls = parseProperties(properties);

        const handleAfterSubmit = (data) => {
            setData(data);
        }

        return (
            <div className={tw`bg-gray-100 py-10`}>
                <div className={tw`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4`}>
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

App.propTypes = {
    schema: PropTypes.instanceOf(Object).isRequired,
}

export default App;
