import { addChapter, deleteChapters } from '@store/reducer/chapterReducer';
import { setGameName } from '@store/reducer/newRuleReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import InputNumber from '@shared/InputNumber/InputNumber';
import Localization from '@localization/components/content/newRule/settings';
import React, { useState } from 'react';
import styles from '@css/content/newRule/settings/Settings.module.scss';

interface Props{
    ruleUid: string
    gameName: string
}

const Settings: React.FC<Props> = (props) => {
    console.info('NewRuleSettings');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);
    const { ruleUid, gameName } = props;

    const [chapterCount, setChapterCount] = useState<number>(1);
    const dispatch = useDispatch();

    const changeGameName = (name: string): void => {
        dispatch(setGameName(name));
    };

    const onClickChapterAdd = (): void => {
        dispatch(addChapter(ruleUid, chapterCount));
    };

    const onClickDeleteChapters = (): void => {
        dispatch(deleteChapters());
    };

    const onInputChapter = (count: string): void => {
        setChapterCount(+count);
    };

    const onClickSave = (): void => {
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
                {gameName
                    ? <button type="button" onClick={onClickSave}>{Localization.save}</button>
                    : <button type="button" disabled>{Localization.save}</button>}

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
