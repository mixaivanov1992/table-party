import React, { ReactNode } from 'react';
import Chapters from './Chapters/Chapters';
import Settings from './Settings/Settings';

interface Props {
    children: ReactNode
}
const NewRule: React.FC<Props> = (props) => {
    console.debug('NewRule');
    const { children } = props;
    const sheetCount = 3;
    return (
        <>
            {children}
            <div>
                <Settings sheetCount={sheetCount} />
                <Chapters />
            </div>
        </>
    );
};

export default NewRule;
