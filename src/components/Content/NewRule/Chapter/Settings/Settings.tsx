import React from 'react';
import { useDispatch } from 'react-redux';
import { setSheetCount, setChapterName, removeChapter } from '@src/store/reducer/chapterReducer';
import styles from '@css/content/newRule/chapter/settings/Settings.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';

interface Props {
    sheetCount: number,
    chapterUid: string,
    chapterNumber: number,
    chapterName: string
}

const Settings: React.FC<Props> = (props) => {
    console.debug('Settings');
    const dispatch = useDispatch();
    const {
        sheetCount, chapterUid, chapterNumber, chapterName,
    } = props;

    const onClickRemoveChapter = (): void => {
        dispatch(removeChapter(chapterUid));
    };

    const onChangeChapterName = (name: string): void => {
        dispatch(setChapterName(chapterUid, name));
    };

    const onInputSheet = (count: string): void => {
        dispatch(setSheetCount(chapterUid, +count));
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
                    {chapterNumber}
                </span>
                <label htmlFor={`chapterName-${chapterNumber}`}>
                    <input
                        type="text"
                        placeholder="Название главы"
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

export default React.memo(Settings);
