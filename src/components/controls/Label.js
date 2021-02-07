import Tooltip from './Tooltip';
import Info from './Info';
import { tw } from 'twind';
import PropTypes from 'prop-types';

const Label = ({id, text, description, examples, children}) => (
    <>
        <label htmlFor={id} className={tw`text-sm`}>{text}</label>
        {(description || examples) && (
            <Tooltip id={`${id}-tooltip`}>
                <Info description={description} examples={examples} />
                {children}
            </Tooltip>
        )}
    </>
);

Label.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    description: PropTypes.string,
    examples: PropTypes.instanceOf(Array),
};

Label.defaultProps = {
    text: '',
    description: null,
    examples: null,
};

export default Label;
