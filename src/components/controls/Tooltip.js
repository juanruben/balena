/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactTooltip from 'react-tooltip';
import { tw } from 'twind';
import PropTypes from 'prop-types';

const Tooltip = ({id, children}) => (
    <>
        <a className={tw`cursor-pointer pl-2`} data-tip data-for={`${id}-tooltip`}>ⓘ</a>
        <ReactTooltip
            id={`${id}-tooltip`}
            border={true}
            place={'right'}
            type={'light'}
        >
            {children}
        </ReactTooltip>
    </>
);

Tooltip.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Tooltip;
