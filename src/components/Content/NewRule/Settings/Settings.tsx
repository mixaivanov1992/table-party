import { Version } from '@models/reducer/newRuleReducer';
import { actionHandler } from '@store/actions/actionHandler';
import { addChapter, deleteChapters } from '@store/reducer/chapterReducer';
import { saveRuleAction } from '@store/actions/ruleAction';
import { setGameName } from '@store/reducer/newRuleReducer';
import { showMessage } from '@store/reducer/messageReducer';
import { store } from '@store/index';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import InputNumber from '@shared/InputNumber/InputNumber';
import Localization from '@localization/components/content/newRule/settings';
import React, { useState } from 'react';
import styles from '@css/content/newRule/settings/Settings.module.scss';

interface Props{
    ruleUid: string,
    gameName: string,
    username: string
}

const Settings: React.FC<Props> = (props) => {
    console.info('NewRuleSettings');
    const dispatch = useDispatch();
    Localization.setLanguage(navigator.language);

    const { ruleUid, gameName, username } = props;

    const [chapterCount, setChapterCount] = useState<number>(1);
    const stateChapterCount = useTypedSelector((state) => state.chapterReducer[ruleUid]?.length || 0);

    const changeGameName = (name: string): void => {
        dispatch(setGameName(name));
    };

    const onClickChapterAdd = (): void => {
        if ((stateChapterCount + chapterCount) <= 100) {
            dispatch(addChapter(ruleUid, chapterCount));
        } else {
            dispatch(showMessage(true, Localization.limitReached, Localization.maximumChapters));
        }
    };

    const onClickDeleteChapters = (): void => {
        dispatch(deleteChapters());
    };

    const onInputChapter = (count: string): void => {
        setChapterCount(+count);
    };

    async function onClickSave(): Promise<void> {
        const versionIndex = Object.keys(Version);
        const version:Version = Version[versionIndex[versionIndex.length - 1] as Version];
        const { chapterReducer, sheetReducer } = store.getState();

        const rule = {
            uid: ruleUid,
            username,
            name: gameName,
            language: navigator.language,
            isPrivate: false,
            rating: 0,
            version,
        };
        const chapters = {
            [ruleUid]: chapterReducer[ruleUid].map((chapter) => ({ uid: chapter.uid, name: chapter.name })),
        };
        const sheets = {};
        chapters[ruleUid].forEach((chapter) => {
            const chapterUid = chapter.uid;
            if (sheetReducer[chapterUid]) {
                sheets[chapterUid] = sheetReducer[chapterUid].map((sheet) => ({ uid: sheet.uid, content: sheet.content, cover: sheet.cover }));
            } else {
                sheets[chapterUid] = [];
            }
        });
        const result = await actionHandler(dispatch, saveRuleAction, { rule, chapters, sheets });

        if (result.isSuccess) {
            dispatch(showMessage(true, Localization.dataSaved, result.message));
        } else {
            dispatch(showMessage(true, Localization.error, result.message));
        }
    }
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
