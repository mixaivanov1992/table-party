import React from 'react';
import styles from '@css/content/newRule/NewRule.module.scss';
import ChapterContainer from './Chapter/ChapterContainer';

interface Props{
    changeGameName(gameName:string): void,
    gameName: string
}

const NewRule: React.FC<Props> = (props) => {
    const { changeGameName, gameName } = props;
    return (
        <div className={styles.new_rule}>
            <div className={styles.game_name}>
                <label htmlFor="gameName">
                    <span>Название игры:</span>
                    <input onChange={(e) => { changeGameName(e.currentTarget.value); }} id="gameName" type="text" placeholder="Введите название" value={gameName} />
                </label>
            </div>
            <div className={styles.container}>
                <ChapterContainer />
            </div>
        </div>
    );
};

export default NewRule;
