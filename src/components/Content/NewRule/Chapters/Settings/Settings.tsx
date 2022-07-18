import { addSheet } from '@store/reducer/sheetReducer';
import { removeChapter, setChapterName } from '@store/reducer/chapterReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import InputNumber from '@shared/InputNumber/InputNumber';
import Localization from '@localization/components/content/newRule/chapter/settings';
import React, { useState } from 'react';
import styles from '@css/content/newRule/chapters/settings/Settings.module.scss';

interface Props {
    ruleUid: string,
    chapterIndex: number,
}

const Settings: React.FC<Props> = (props) => {
    console.info('Settings');
    Localization.setLanguage(navigator.language);

    const dispatch = useDispatch();
    const { ruleUid, chapterIndex } = props;
    const chapterUid = useTypedSelector((state) => state.chapterReducer[ruleUid][chapterIndex].uid);
    const chapterName = useTypedSelector((state) => state.chapterReducer[ruleUid][chapterIndex].name);

    const [sheetCount, SetSheetCount] = useState<number>(1);
    const chapterNumber = chapterIndex + 1;

    const onClickRemoveChapter = (): void => {
        dispatch(removeChapter(ruleUid, chapterUid));
    };

    const onChangeChapterName = (name: string): void => {
        dispatch(setChapterName(ruleUid, chapterUid, name));
    };

    const onInputSheet = (count: string): void => {
        SetSheetCount(+count);
    };

    const onClickAddSheet = (): void => {
        dispatch(addSheet(chapterUid, sheetCount));
    };

    return (
        <div className={styles.settings}>
            <div className={styles.sheet}>
                <span>{Localization.numberSheets}</span>
                <InputNumber
                    uid={chapterUid}
                    value={sheetCount}
                    onInputData={onInputSheet}
                />
                <button
                    type="button"
                    onClick={onClickAddSheet}
                >
                    {Localization.addSheets}
                </button>
            </div>
            <div className={styles.chapter_name}>
                <span>
                    {Localization.chapterNumber}
                    {chapterNumber}
                </span>
                <label htmlFor={`chapterName-${chapterNumber}`}>
                    <input
                        type="text"
                        placeholder={Localization.chapterTitle}
                        id={`chapterName-${chapterNumber}`}
                        value={chapterName}
                        onChange={
                            (e) => {
                                onChangeChapterName(e.currentTarget.value);
                            }
                        }
                    />
                </label>
            </div>
            <div className={styles.remove_chapter}>
                <button
                    type="button"
                    onClick={onClickRemoveChapter}
                >
                    {Localization.deleteChapter}
                </button>
            </div>
        </div>
    );
};

export default Settings;
