import Tooltip from './Tooltip';
import Info from './Info';
import { tw } from 'twind';

const Label = ({id, text, description, examples, children}) => {
    return (
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
};

export default Label;
