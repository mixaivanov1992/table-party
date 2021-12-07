import React from 'react';
import styles from '@css/Row.module.scss';
import { IoOptions, IoTrash } from "react-icons/io5";
import InputNumber from '@shared/InputNumber/InputNumber';
import { RowState } from '@interfaces-types/rowReducer';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

interface Props {
    onClickSettingsVisibility(index: number): void,
    //onClickColumnAdd(): void,
    inputColumn(columnCount: number, index: number): void,
    // localCellCount: number,
    //columnCount: number,
    onClickRowAdd(): void,
    onClickRemoveRow(index: number): void,
    inputRow(rowCount: number): void,
    rowState: RowState,
    rowCount: number,
}

const Row: React.FC<Props> = (props) => {
    let row: JSX.Element,
        rows: JSX.Element[];

    rows = [];
    for (let i = 0; i < props.rowState.rows.length; i++) {
        //console.log(i, 'qqq');
        if (props.rowState.rows[i].index !== 0) {
            row = <></>;
            if (props.rowState.rows[i].settings.visibility) {
                row = <>
                    <div>
                        <div>Кол-во колонок:</div>
                        <InputNumber
                            value={props.rowState.rows[i].columnCount}
                            setValue={props.inputColumn}
                        />
                    </div>
                    <div className={styles.remove}>
                        <button onClick={
                            () => {
                                props.onClickRemoveRow(props.rowState.rows[i].index);
                            }
                        }>Удалить строку</button>
                    </div>
                </>;
            }
            row =
                <CSSTransition
                    in={props.rowState.rows[i].settings.visibility}
                    timeout={200}
                    classNames={{
                        enter: styles['enter'],
                        enterActive: styles['enterActive'],
                        exit: styles['exit'],
                        exitActive: styles['exitActive'],
                    }}
                    unmountOnExit
                >
                    <div className={styles.settings}>{row}</div>
                </CSSTransition>;


            rows.push(
                <div key={props.rowState.rows[i].index} className={styles.container}>
                    <div className={styles.row}>
                        <span>cell</span>
                    </div>
                    <React.Fragment>
                        {row}
                    </React.Fragment>
                    <span className={styles.settings_btn}
                        onClick={
                            (e) => {
                                props.onClickSettingsVisibility(props.rowState.rows[i].index);
                            }
                        }
                    >
                        <IoOptions className={styles.icon} />
                    </span>
                </div>
            );
        }
    }
    return (
        <div className={styles.container}>
            <InputNumber
                value={props.rowCount}
                setValue={props.inputRow}
            />
            <button onClick={props.onClickRowAdd}>Добавить строки(у)</button>
            <React.Fragment>
                {rows}
            </React.Fragment>
        </div>
    );
}

export default Row;