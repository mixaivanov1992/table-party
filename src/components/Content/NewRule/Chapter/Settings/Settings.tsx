import React from 'react';
import styles from '@css/content/newRule/chapter/settings/Settings.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';

interface Props {
    onClickRemoveChapter(index: string): void,
    onInputSheet(sheetCount: string): void,
    onChangeChapterName(name: string): void,
    sheetCount: number,
    chapterIndex: string,
    chapterNumber: number,
    chapterName: string
}

const Settings: React.FC<Props> = (props) => {
    console.debug('Settings');
    const {
        sheetCount, chapterIndex, chapterNumber, chapterName, onClickRemoveChapter, onInputSheet, onChangeChapterName,
    } = props;

    return (
        <div className={styles.settings}>
            <div className={styles.sheet}>
                <span>Кол-во листов:</span>
                <InputNumber
                    index={chapterIndex}
                    value={sheetCount}
                    onInputData={onInputSheet}
                />
            </div>
            <div className={styles.chapter_name}>
                <span>
                    Глава №
                    {chapterNumber}
                </span>
                <label htmlFor={`'chapterName-'${chapterNumber}`}>
                    <input
                        type="text"
                        placeholder="Название главы"
                        id={`'chapterName-'${chapterNumber}`}
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
                            onClickRemoveChapter(chapterIndex);
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
