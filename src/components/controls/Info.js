import { tw } from 'twind';
import PropTypes from 'prop-types';

const Info = ({ description, examples }) => (
    <>
        {description && (
            <div className={tw`pb-4`}>
                <b>Description:</b>
                <div>{description}</div>
            </div>
        )}
        {examples && (
            <div className={tw`pb-4`}>
                <b>Examples:</b>
                <ul className={tw`list-inside list-disc`}>
                    {examples?.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </div>
        )}
    </>
);

Info.propTypes = {
    description: PropTypes.string,
    examples: PropTypes.instanceOf(Array),
};

Info.defaultProps = {
    description: null,
    examples: null,
};

export default Info;
