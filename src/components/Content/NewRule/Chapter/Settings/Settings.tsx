import React from 'react';
import styles from '@css/content/newRule/chapter/settings/Settings.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    onClickChangeColumnCount(index: string, columnCount: number): void,
    columnCount: number,
    chapterIndex: string,
}

const Settings: React.FC<Props> = (props) => {
    console.debug('Settings');
    const columnsIndex = [1, 2, 3];
    const { columnCount, chapterIndex, onClickChangeColumnCount } = props;
    const columns = columnsIndex.map((index) => {
        if (index === columnCount) {
            return (
                <span
                    tabIndex={0}
                    onKeyPress={() => {}}
                    role="button"
                    onClick={() => { onClickChangeColumnCount(chapterIndex, index); }}
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
                onClick={() => { onClickChangeColumnCount(chapterIndex, index); }}
                key={uuidv4()}
            >
                {index}
            </span>
        );
    });
    return (
        <div className={styles.settings}>
            <div>Кол-во колонок:</div>
            <div className={styles.column}>
                {columns}
            </div>
        </div>
    );
};

export default Settings;
