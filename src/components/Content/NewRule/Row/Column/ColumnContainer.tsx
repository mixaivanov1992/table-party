
import React, { useState } from "react";
import { removeRow } from '@src/store/reducer/rowReducer';
import { useDispatch } from "react-redux";
import Column from "./Column";

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
    }

    return (
        <Column
            onClickShowDialog = {onClickShowDialog}
            onClickRemoveRow={onClickRemoveRow}
            columnCount={props.columnCount}
            rowIndex={props.rowIndex}
            showDialog={showDialog}
            number={props.number}
        />
    );
}

export default ColumnContainer;