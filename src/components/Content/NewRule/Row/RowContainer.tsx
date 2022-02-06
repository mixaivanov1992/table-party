import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { setColumnCount, addRow, /*setSettingsVisibility,*/ removeRow } from '@src/store/reducer/rowReducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Row from './Row';

interface Props {
}

const RowContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const rowState = useTypedSelector(state => state.rowReducer);
    const [rowCount, setRowCount] = useState(1);
    
    //const [columnCount, setColumnCount] = useState(1);
    // const [localCellCount, setCellCountLocal] = useState(cellCount?cellCount:1);

    // const onClickColumnAdd = (): void => {
    //     //dispatch(setRowCount(rowCount));
    // }

    const inputColumn = (columnCount:number, index: number): void => {
        dispatch(setColumnCount(index, columnCount));
    }

    // const onClickSettingsVisibility = (index: number): void => {
    //     dispatch(setSettingsVisibility(index));
    // }

    const onClickRemoveRow = (index: number): void => {
        dispatch(removeRow(index));
    }

    const onClickRowAdd = (): void => {
        dispatch(addRow(rowCount));
    }
    
    const inputRow = (rowCount: number): void => {
        setRowCount(rowCount);
    }
    
    return (
        <Row
            // onClickSettingsVisibility={onClickSettingsVisibility}
            // onClickCellAdd={onClickCellAdd}
            inputColumn={inputColumn}
            // localCellCount={localCellCount}
            //columnCount={columnCount}
            // rowState={rowReducer}
            onClickRowAdd={onClickRowAdd}
            onClickRemoveRow={onClickRemoveRow}
            inputRow={inputRow}
            rowState={rowState}
            rowCount={rowCount}
        />
    );
}

export default RowContainer;