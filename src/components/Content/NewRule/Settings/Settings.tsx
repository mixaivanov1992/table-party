import React, { useState } from 'react';
import styles from '@css/content/newRule/settings/Settings.module.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { setGameName } from '@store/reducer/newRuleReducer';
import { addChapter, deleteChapters } from '@src/store/reducer/chapterReducer';
import Localization from '@src/assets/localization/content/newRule/settings';
import InputNumber from '@shared/InputNumber/InputNumber';

const Settings: React.FC = () => {
    console.debug('NewRuleSettings');
    const { gameName } = useTypedSelector((state) => state.newRuleReducer);
    const [chapterCount, setChapterCount] = useState(1);
    const dispatch = useDispatch();

    const changeGameName = (name: string): void => {
        dispatch(setGameName(name));
    };

    const onClickChapterAdd = (): void => {
        dispatch(addChapter(chapterCount));
    };

    const onClickDeleteChapters = (): void => {
        dispatch(deleteChapters());
    };

    const onInputChapter = (count: string): void => {
        setChapterCount(+count);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.game_name}>
                <label htmlFor="gameName">
                    <span>
                        {Localization.gameName}
                    </span>
                    <input onChange={(e) => { changeGameName(e.currentTarget.value); }} id="gameName" type="text" placeholder={Localization.enterName} value={gameName} />
                </label>
            </div>
            <div className={styles.chapter}>
                <InputNumber
                    uid="chaptersSettings"
                    value={chapterCount}
                    onInputData={onInputChapter}
                />
                <button type="button" onClick={onClickChapterAdd}>{Localization.addChapter}</button>
                <button type="button" onClick={onClickDeleteChapters}>{Localization.deleteChapters}</button>
            </div>
        </div>
    );
};
export default Settings;
