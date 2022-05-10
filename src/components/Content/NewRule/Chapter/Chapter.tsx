import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import React from 'react';
import styles from '@css/content/newRule/chapter/Chapter.module.scss';
import Paginate from '@shared/Paginate/Paginate';
import Sheet from './Sheet/Sheet';
import Settings from './Settings/Settings';

const Chapter: React.FC = () => {
    console.debug('Chapter');

    const emptyIndex = 1;
    const chapterCount = useTypedSelector((state) => state.chapterReducer.chapters.length) - emptyIndex;

    const renderContent = (index: number): JSX.Element => (
        <div className={styles.container}>
            <Settings chapterIndex={index + emptyIndex} />
            <Sheet chapterIndex={index + emptyIndex} />
        </div>
    );
    return (
        <div className={styles.chapter}>
            {!!chapterCount && <Paginate renderContent={renderContent} chapterCount={chapterCount} itemsPerPage={5} />}
        </div>
    );
};

export default Chapter;
