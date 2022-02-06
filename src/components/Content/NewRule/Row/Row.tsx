import React, { useState, useMemo } from 'react';
import styles from '@css/Row.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';
import { RowState } from '@interfaces-types/rowReducer';

interface Props {
    // onClickSettingsVisibility(index: number): void,
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

//remove visibility

const Row: React.FC<Props> = (props) => {
    // useMemo(() => {

        const rows = props.rowState.rows.map((item)=>{
            console.log(item)
        });

        // let settings: JSX.Element,
        // rows: JSX.Element[];

        // rows = [];

        




        // for (let i = 0; i < props.rowState.rows.length; i++) {
        //     if (props.rowState.rows[i].index !== 0) {
        //         settings =
        //             <div className={styles.settings}>
        //                 <div>Кол-во колонок:</div>
        //                 <div className={styles.column}>
        //                     <span>1</span>
        //                     <span>2</span>
        //                     <span>3</span>
        //                 </div>
        //                 {/* <InputNumber
        //                         value={props.rowState.rows[i].columnCount}
        //                         setValue={props.inputColumn}
        //                     /> */}
        //             </div>;

        //         rows.push(
        //             <div key={props.rowState.rows[i].index} className={styles.row}>
        //                 {settings}
        //                 <div className={styles.cell}>cell</div>
        //                 <div className={styles.cell}>cell</div>
        //                 <div className={styles.cell}>cell</div>
        //                 <div className={styles.remove}>
        //                     <button onClick={
        //                         () => {
        //                             props.onClickRemoveRow(props.rowState.rows[i].index);
        //                         }
        //                     }>&#10005;</button>
        //                 </div>
        //                 {/* <span className={styles.settings_btn}
        //                     onClick={
        //                         (e) => {
        //                             props.onClickSettingsVisibility(props.rowState.rows[i].index);
        //                         }
        //                     }
        //                 >
        //                 </span> */}
        //             </div>
        //         );
        //     }
        // }





    // }, [props.rowState]);
    return (
        <div className={styles.container}>
            <div>
                <InputNumber
                    value={props.rowCount}
                    setValue={props.inputRow}
                />
                <button onClick={props.onClickRowAdd}>Добавить строки(у)</button>
            </div>
            {rows}
        </div>
    );
}

export default Row;