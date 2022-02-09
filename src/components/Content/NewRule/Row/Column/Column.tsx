import React, { useState } from "react";
import styles from '@css/content/newRule/row/column/Column.module.scss';
import DialogContainer from "./Dialog/DialogContainer";

interface Props {
    onClickRemoveRow(index: string): void,
    columnCount: number,
    rowIndex: string,
}

const Column: React.FC<Props> = (props) => {
    console.debug('Column');
    const [showDialog, setShowDialog] = useState(false);
    
    return (
        <>
            {
                [...Array(props.columnCount)].map((element, index) => {
                    return <div onClick={()=>{ setShowDialog(true) }} key={index} className={styles.column}>column</div>
                })
            }
            <div className={styles.remove}>
                <button onClick={
                    () => {
                        props.onClickRemoveRow(props.rowIndex);
                    }
                }>&#10005;</button>
            </div>
            { showDialog? <DialogContainer /> : '' }
        </>
    );
}

export default Column;