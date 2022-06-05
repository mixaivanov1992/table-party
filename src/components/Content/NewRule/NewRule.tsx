import React, { ReactNode } from 'react';
import Chapters from './Chapters/Chapters';
import Settings from './Settings/Settings';
import SheetDialog from './SheetDialog/SheetDialog';

interface Props {
    children: ReactNode
}
const NewRule: React.FC<Props> = (props) => {
    console.info('NewRule');
    const { children } = props;
    const sheetCount = 3;
    return (
        <>
            {children}
            <div>
                <Settings sheetCount={sheetCount} />
                <Chapters />
                <SheetDialog />
            </div>
        </>
    );
};

export default NewRule;
