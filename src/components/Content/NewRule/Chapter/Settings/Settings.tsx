import React from 'react';
import styles from '@css/content/newRule/chapter/settings/Settings.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    onClickChangeSheetCount(index: string, sheetCount: number): void,
    sheetCount: number,
    chapterIndex: string,
    number: number,
    onClickRemoveChapter(index: string): void,
}

const Settings: React.FC<Props> = (props) => {
    console.debug('Settings');
    const sheetsIndex = [1, 2, 3];
    const {
        sheetCount, chapterIndex, number, onClickChangeSheetCount, onClickRemoveChapter,
    } = props;
    const sheets = sheetsIndex.map((index) => {
        if (index === sheetCount) {
            return (
                <span
                    tabIndex={0}
                    onKeyPress={() => {}}
                    role="button"
                    onClick={() => { onClickChangeSheetCount(chapterIndex, index); }}
                    key={uuidv4()}
                    className={styles.active}
                >
                    {index}
                </span>
            );
        }
        return (
            <span
                tabIndex={0}
                onKeyPress={() => {}}
                role="button"
                onClick={() => { onClickChangeSheetCount(chapterIndex, index); }}
                key={uuidv4()}
            >
                {index}
            </span>
        );
    });
    return (
        <div className={styles.settings}>
            <div>Кол-во листов:</div>
            <div className={styles.sheet}>
                {sheets}
            </div>
            <div className={styles.remove}>
                <span>
                    Глава №
                    {number}
                </span>
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
