import { tw } from 'twind';

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

export default ErrorMessage;
