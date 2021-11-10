import React from 'react';
import styles from '@css/NewRule.module.scss';
import RowContainer from './Row/RowContainer';
import InputNumber from '@shared/InputNumber/InputNumber';

interface Props{
    clickRowAdd(): void,
    inputRowCount(rowCount:number): void,
    changeGameName(gameName:string): void,
    rowCountLocal: number,
    rowCount: number,
    gameName: string
}

const NewRule: React.FC<Props> = (props) => {
    return (
        <div className={styles.new_rule}>
            <div className={styles.game_name}>
                <label htmlFor="gameName">Название игры:</label>
                <input onChange={(e) => {props.changeGameName(e.target.value)}} id="gameName" type="text" placeholder="Введите название" value={props.gameName}/>
            </div>
            <div className={styles.content}>
                <RowContainer rowCount={props.rowCount}/>
            </div>
            <div className={styles.footer_panel}>
                <div>
                    <InputNumber
                        value={props.rowCountLocal}
                        setValue={props.inputRowCount}
                    />
                    <button onClick={props.clickRowAdd}>Добавить строки(у)</button>
                </div>
                <div>
                    <button className={styles.save}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}

export default NewRule;