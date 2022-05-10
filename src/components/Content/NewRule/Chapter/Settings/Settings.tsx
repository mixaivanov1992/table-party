import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSheetCount, setChapterName, removeChapter } from '@src/store/reducer/chapterReducer';
import styles from '@css/content/newRule/chapter/settings/Settings.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';

interface Props {
    chapterIndex: number
}

const Settings: React.FC<Props> = (props) => {
    console.debug('Settings');
    const dispatch = useDispatch();

    const { chapterIndex } = props;
    const { sheetCount, uid: chapterUid, name: chapterName } = useTypedSelector((state) => state.chapterReducer.chapters[chapterIndex]);

    const [updateComponent, setUpdateComponent] = useState(true);

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
                <span>Кол-во листов:</span>
                <InputNumber
                    uid={chapterUid}
                    value={sheetCount}
                    onInputData={onInputSheet}
                />
            </div>
            <div className={styles.chapter_name}>
                <span>
                    Глава №
                    {chapterIndex}
                </span>
                <label htmlFor={`chapterName-${chapterIndex}`}>
                    <input
                        type="text"
                        placeholder="Название главы"
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
                    Удалить главу
                </button>
            </div>
        </div>
    );
};

export default Settings;
