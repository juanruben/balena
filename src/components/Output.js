import { tw } from 'twind';

const Output = ({data}) => {
    return (
        <>
            <p className={tw`pb-4 whitespace-pre-wrap`}>Output:</p>
            <pre className={tw`whitespace-pre-wrap`}>
                {data}
            </pre>
        </>
);
};

export default Output;


