import React from 'react';
import styles from '@css/NewRule.module.scss';

interface Props{
    clickRowAdd(): void,
    inputRowCount(string): void,
    changeGameName(string): void,
    rowCountLocal: number,
    rowCount: number,
    gameName: string
}

const NewRule: React.FC<Props> = (props) => {
    let rows = '';
    for (let index = 0; index < props.rowCount; index++) {
        rows += <div>qqq</div>;
    }

    return (
        <div className={styles.new_rule}>
            <div className={styles.game_name}>
                <label htmlFor="gameName">Название игры:</label>
                <input onChange={(e) => {props.changeGameName(e.target.value)}} id="gameName" type="text" placeholder="Введите название" value={props.gameName}/>
            </div>
            <div className={styles.content}>
                {/* <React.Fragment>{rows}</React.Fragment> */}
            </div>
            <div className={styles.footer_panel}>
                <div>
                    <input type="number" onInput={(e) => {
                        let value = (e.target as HTMLInputElement).value.replace(/^0/, '');
                        
                        if(new RegExp('^[0-9]*$').test(value) && new RegExp('^(?!\s*$).+').test(value)){
                            props.inputRowCount(value);
                        }
                    }} value={props.rowCountLocal} />
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