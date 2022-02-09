import React from 'react';
import styles from '@css/content/newRule/row/Row.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';
import { RowState } from '@interfaces-types/rowReducer';
import ColumnContainer from './Column/ColumnContainer';
import SettingsContainer from './Settings/SettingsContainer';

interface Props {
    onClickRowAdd(): void,
    inputRow(rowCount: string): void,
    rowState: RowState,
    rowCount: number,
}
const Row: React.FC<Props> = (props) => {
    console.debug('Row');
    const rows = props.rowState.rows.map((rowData)=>{
        if(rowData.index){
            return (
                <div key={rowData.index} className={styles.row}>
                    <SettingsContainer rowIndex={rowData.index} columnCount={rowData.columnCount}/>
                    <ColumnContainer rowIndex={rowData.index} columnCount={rowData.columnCount}/>
                </div>
            );
        }
    });
    return (
        <div className={styles.container}>
            <div>
                <InputNumber
                    value={props.rowCount}
                    inputRow={props.inputRow}
                />
                <button onClick={props.onClickRowAdd}>Добавить строки(у)</button>
            </div>
            {rows}
        </div>
    );
}

export default Row;