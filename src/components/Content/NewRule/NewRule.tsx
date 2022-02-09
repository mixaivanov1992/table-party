import React from 'react';
import styles from '@css/content/newRule/NewRule.module.scss';
import RowContainer from './Row/RowContainer';

interface Props{
    changeGameName(gameName:string): void,
    gameName: string
}

const NewRule: React.FC<Props> = (props) => {
    return (
        <div className={styles.new_rule}>
            <div className={styles.game_name}>
                <label htmlFor="gameName">Название игры:</label>
                <input onChange={(e) => {props.changeGameName(e.currentTarget.value)}} id="gameName" type="text" placeholder="Введите название" value={props.gameName}/>
            </div>
            <div className={styles.container}>
                <RowContainer />
            </div>
        </div>
    );
}

export default NewRule;