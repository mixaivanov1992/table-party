import React from 'react';
import styles from '@css/Row.module.scss';
import { IoSettingsSharp, IoTrash } from "react-icons/io5";
import InputNumber from '@shared/InputNumber/InputNumber';

interface Props{
    clickCellAdd(): void,
    inputCellCount(rowCount:number): void,
    cellCountLocal: number,
    cellCount: number,
    cellIndex: number
}

const Row: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}></div>
            <div className={styles.settings_btn}><IoSettingsSharp className={styles.icon} /></div>
            <div className={styles.settings}>
                <div>
                    <InputNumber
                        value={props.cellCountLocal}
                        setValue={props.inputCellCount}
                    />
                    <button onClick={props.clickCellAdd}>Добавить ячейки(у)</button>
                </div>
                <div className={styles.remove}><IoTrash className={styles.icon}/></div>
            </div>
        </div>
    );
}

export default Row;