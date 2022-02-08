
import { removeRow } from '@src/store/reducer/rowReducer';
import React from "react";
import { useDispatch } from "react-redux";
import Column from "./Column";

interface Props {
    columnCount: number,
    rowIndex: string,
}
const ColumnContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const onClickRemoveRow = (rowIndex: string): void => {
        dispatch(removeRow(rowIndex));
    }

    return (
        <Column
            onClickRemoveRow={onClickRemoveRow}
            columnCount={props.columnCount}
            rowIndex={props.rowIndex}
        />
    );
}

export default ColumnContainer;