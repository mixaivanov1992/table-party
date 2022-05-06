import React from 'react';
import styles from '@css/content/newRule/NewRule.module.scss';
import Localization from '@src/assets/localization/content/newRule';
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
                    <span>
                        {Localization.gameName}
                    </span>
                    <input onChange={(e) => { changeGameName(e.currentTarget.value); }} id="gameName" type="text" placeholder={Localization.enterName} value={gameName} />
                </label>
            </div>
            <ChapterContainer />
        </div>
    );
};

export default NewRule;
