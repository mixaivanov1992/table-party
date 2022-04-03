import React, { useState } from 'react';
import { removeRow } from '@src/store/reducer/rowReducer';
import { useDispatch } from 'react-redux';
import Column from './Column';

interface Props {
    columnCount: number,
    rowIndex: string,
    number: number,
}
const ColumnContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);

    const onClickShowDialog = (isShow) => setShowDialog(isShow);
    const onClickRemoveRow = (rowIndex: string): void => {
        dispatch(removeRow(rowIndex));
    };

    const { columnCount, rowIndex, number } = props;
    return (
        <Column
            onClickShowDialog={onClickShowDialog}
            onClickRemoveRow={onClickRemoveRow}
            columnCount={columnCount}
            rowIndex={rowIndex}
            showDialog={showDialog}
            number={number}
        />
    );
};

export default ColumnContainer;
