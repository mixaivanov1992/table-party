import Chapters from '@components/Content/NewRule/Chapters/Chapters';
import React, { ReactNode } from 'react';
import Settings from '@components/Content/NewRule/Settings/Settings';
import SheetDialog from '@components/Content/NewRule/SheetDialog/SheetDialog';

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
