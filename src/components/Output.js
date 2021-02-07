import { tw } from 'twind';
import PropTypes from 'prop-types';

const Output = ({ data }) => (
    <>
        <p className={tw`pb-4 whitespace-pre-wrap`}>Output:</p>
        <pre className={tw`whitespace-pre-wrap`}>
            {data && JSON.stringify(data, null, 4)}
        </pre>
    </>
);

Output.propTypes = {
    data: PropTypes.instanceOf(Object),
};

Output.defaultProps = {
    data: null,
};

export default Output;


