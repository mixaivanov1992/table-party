import React from "react";
import styles from '@css/Column.module.scss';

interface Props {
    onClickRemoveRow(index: string): void,
    columnCount: number,
    rowIndex: string,
}

const Column: React.FC<Props> = (props) => {
    console.debug('Column');
    return (
        <>
            {
                [...Array(props.columnCount)].map((element, index) => {
                    return <div key={index} className={styles.column}>column</div>
                })
            }
            <div className={styles.remove}>
                <button onClick={
                    () => {
                        props.onClickRemoveRow(props.rowIndex);
                    }
                }>&#10005;</button>
            </div>
        </>
    );
}

export default Column;