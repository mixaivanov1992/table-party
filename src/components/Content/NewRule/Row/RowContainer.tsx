import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Row from './Row';

interface Props{
    rowCount: number,
}

const RowContainer:React.FC<Props> = (props) => {
    
    //const {gameName, rowCount} = useTypedSelector(state => state.newRule);
    const cellCount = 1;
    const dispatch = useDispatch();
    const [cellCountLocal, setCellCountLocal] = useState(cellCount?cellCount:1);

    const clickCellAdd = (): void => {
        //dispatch(setRowCount(rowCountLocal));
    }
    
    const inputCellCount = (cellCountLocal:number): void => {
        setCellCountLocal(cellCountLocal);
    }

    let row: JSX.Element[];
        row = [];
    for (let i = 0; i < props.rowCount; i++) {
        row.push(
            <div key={i}>
                <Row
                    clickCellAdd={clickCellAdd}
                    inputCellCount={inputCellCount}
                    cellCountLocal={cellCountLocal}
                    cellCount={cellCount}
                    cellIndex={i}
                />
            </div>
        );
    }
    return (
		<React.Fragment>
            {row}
        </React.Fragment>
    );
}

export default RowContainer;