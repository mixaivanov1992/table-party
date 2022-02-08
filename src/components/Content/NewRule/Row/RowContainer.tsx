import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { addRow } from '@src/store/reducer/rowReducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Row from './Row';


const RowContainer: React.FC = () => {
    const dispatch = useDispatch();
    const rowState = useTypedSelector(state => state.rowReducer);
    const [rowCount, setRowCount] = useState(1);

    const onClickRowAdd = (): void => {
        dispatch(addRow(rowCount));
    }
    
    const inputRow = (rowCount: string): void => {
        setRowCount(+rowCount);
    }
    
    return (
        <Row
            onClickRowAdd={onClickRowAdd}
            inputRow={inputRow}
            rowState={rowState}
            rowCount={rowCount}
        />
    );
}

export default RowContainer;