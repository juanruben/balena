/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactTooltip from 'react-tooltip';
import { tw } from 'twind';

const Tooltip = ({id, children}) => {
    return (
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
}

export default Tooltip;
