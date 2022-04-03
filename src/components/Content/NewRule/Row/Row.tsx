import React from 'react';
import styles from '@css/content/newRule/row/Row.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';
import { RowState } from '@interfaces-types/rowReducer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
    const rows = props.rowState.rows.map((rowData, number) => {
        if (rowData.index) {
            return (
                <CSSTransition
                    key={rowData.index}
                    timeout={200}
                    classNames={{
                        enter: styles.row_enter,
                        enterActive: styles.row_enter_active,
                        exit: styles.row_exit,
                        exitActive: styles.row_exit_active,
                    }}
                >
                    <div className={styles.row}>
                        <SettingsContainer rowIndex={rowData.index} columnCount={rowData.columnCount} />
                        <ColumnContainer rowIndex={rowData.index} columnCount={rowData.columnCount} number={number} />
                    </div>
                </CSSTransition>
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
            <TransitionGroup>
                {rows}
            </TransitionGroup>
        </div>
    );
};
export default Row;
