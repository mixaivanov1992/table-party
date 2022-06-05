import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSheetCount, setChapterName, removeChapter } from '@src/store/reducer/chapterReducer';
import styles from '@css/content/newRule/chapters/settings/Settings.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import Localization from '@src/assets/localization/content/newRule/chapter/settings';

interface Props {
    chapterIndex: number
}

const Settings: React.FC<Props> = (props) => {
    console.info('Settings');

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const dispatch = useDispatch();
    const { chapterIndex } = props;
    const {
        sheetCount: chapterSheetCount, uid: chapterUid, name: chapterName,
    } = useTypedSelector((state) => state.chapterReducer.chapters[chapterIndex]);

    const [updateComponent, setUpdateComponent] = useState<boolean>(true);

    const onClickRemoveChapter = (): void => {
        dispatch(removeChapter(chapterUid));
    };

    const onChangeChapterName = (name: string): void => {
        dispatch(setChapterName(chapterUid, name));
        setUpdateComponent(!updateComponent);
    };

    const onInputSheet = (count: string): void => {
        dispatch(setSheetCount(chapterUid, +count));
        setUpdateComponent(!updateComponent);
    };

    return (
        <div className={styles.settings}>
            <div className={styles.sheet}>
                <span>{Localization.numberSheets}</span>
                <InputNumber
                    uid={chapterUid}
                    value={chapterSheetCount}
                    onInputData={onInputSheet}
                />
            </div>
            <div className={styles.chapter_name}>
                <span>
                    {Localization.chapterNumber}
                    {chapterIndex}
                </span>
                <label htmlFor={`chapterName-${chapterIndex}`}>
                    <input
                        type="text"
                        placeholder={Localization.chapterTitle}
                        id={`chapterName-${chapterIndex}`}
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
                    onClick={
                        () => {
                            onClickRemoveChapter();
                        }
                    }
                >
                    {Localization.deleteChapter}
                </button>
            </div>
        </div>
    );
};

export default Settings;
