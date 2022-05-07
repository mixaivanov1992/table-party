import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import React from 'react';
import styles from '@css/content/newRule/chapter/Chapter.module.scss';
import Paginate from '@shared/Paginate/Paginate';
import Sheet from './Sheet/Sheet';
import Settings from './Settings/Settings';

const Chapter: React.FC = () => {
    console.debug('Chapter');

    const chapterState = useTypedSelector((state) => state.chapterReducer);
    const emptyIndex = 1;
    const chapters = chapterState.chapters.slice(emptyIndex);
    const paginateItems = [...Array(chapters.length)].map((empty, i) => i);

    const renderContent = (index: number): JSX.Element => {
        const { uid, sheetCount, name } = chapters[index];
        return (
            <div className={styles.container}>
                <Settings chapterUid={uid} sheetCount={sheetCount} chapterNumber={index + 1} chapterName={name} />
                <Sheet sheetCount={sheetCount} />
            </div>
        );
    };

    return (
        <div className={styles.chapter}>
            {!!paginateItems.length && <Paginate renderContent={renderContent} items={paginateItems} itemsPerPage={5} />}
        </div>
    );
};

export default React.memo(Chapter);
