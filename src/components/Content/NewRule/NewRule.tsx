import React, { ReactNode } from 'react';
import Chapter from './Chapter/Chapter';
import Settings from './Settings/Settings';

interface Props {
    children: ReactNode
}
const NewRule: React.FC<Props> = (props) => {
    console.debug('NewRule');
    const { children } = props;
    return (
        <>
            {children}
            <div>
                <Settings />
                <Chapter />
            </div>
        </>
    );
};

export default NewRule;
