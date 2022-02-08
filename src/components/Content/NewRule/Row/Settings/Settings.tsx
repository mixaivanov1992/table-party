import React from "react";
import styles from '@css/Settings.module.scss';

interface Props {
    onClickChangeColumnCount(index: string, columnCount: number): void,
    columnCount: number,
    rowIndex: string,
}

const Settings: React.FC<Props> = (props) => {
    console.debug('Settings');
    const columnsIndex = [1,2,3];
    const columns = columnsIndex.map((index) => {
        if(index === props.columnCount){
            return (
                <span
                    onClick={()=>{ props.onClickChangeColumnCount(props.rowIndex, index) }}
                    key={index} className={styles.active}>{index}
                </span>
            );
        }else{
            return (
                <span
                    onClick={()=>{ props.onClickChangeColumnCount(props.rowIndex, index) }}
                    key={index}>{index}
                </span>
            );
        }
    });
    return (
        <div className={styles.settings}>
            <div>Кол-во колонок:</div>
            <div className={styles.column}>
                {columns}
            </div>
        </div>
    );
}

export default Settings;