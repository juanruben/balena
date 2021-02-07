import { tw } from 'twind';
import PropTypes from 'prop-types';

const ErrorMessage = ({id, errors}) => {
    if (errors[id]) {
        return (
            <div className={tw`text-red-500 text-right text-xs font-light`}>
                This field is required
            </div>
        )
    }

    return null;
};

ErrorMessage.propTypes = {
    id: PropTypes.string.isRequired,
    errors: PropTypes.instanceOf(Object),
};

export default ErrorMessage;
