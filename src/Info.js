import React from 'react';
import { tw } from 'twind';

const Info = ({description, examples}) => {
    return (
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
};

export default Info;
