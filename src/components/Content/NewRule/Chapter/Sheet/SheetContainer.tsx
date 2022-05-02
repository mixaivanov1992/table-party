import React, { useState } from 'react';
import Sheet from './Sheet';

interface Props {
    sheetCount: number,
}
const SheetContainer: React.FC<Props> = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const onClickShowDialog = (isShow) => setShowDialog(isShow);

    const { sheetCount } = props;
    return (
        <Sheet
            onClickShowDialog={onClickShowDialog}
            sheetCount={sheetCount}
            showDialog={showDialog}
        />
    );
};

export default React.memo(SheetContainer);
