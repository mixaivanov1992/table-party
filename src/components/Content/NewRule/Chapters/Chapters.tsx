import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import React from 'react';
import styles from '@css/content/newRule/chapters/Chapters.module.scss';
import Paginate from '@shared/Paginate/Paginate';
import Localization from '@src/assets/localization/content/newRule/chapter';
// import { v4 as uuidv4 } from 'uuid';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Settings from './Settings/Settings';

const Chapter: React.FC = () => {
    console.debug('Chapter');

    const emptyIndex = 1;
    const itemsPerPage = 5;
    const chapterCount = useTypedSelector((state) => state.chapterReducer.chapters.length) - emptyIndex;

    const renderContent = (index: number): JSX.Element => (
        <div className={styles.container}>
            {/* <CSSTransition
                key={uuidv4()}
                timeout={200}
                classNames={{
                    enter: styles.paginate_enter,
                    enterActive: styles.paginate_enter_active,
                    exit: styles.paginate_exit,
                    exitActive: styles.paginate_exit_active,
                }}
            > */}
            <Settings chapterIndex={index + emptyIndex} />
            {/* </CSSTransition> */}
        </div>
    );
    return (
        <div className={styles.chapter}>
            {/* <TransitionGroup> */}
            {!!chapterCount
            && (
                <>
                    <Paginate renderContent={renderContent} itemCount={chapterCount} itemsPerPage={itemsPerPage} />
                    <div className={styles.chapter_navigation}>{Localization.chapterNavigation}</div>
                </>
            )}
            {/* </TransitionGroup> */}
        </div>
    );
};

export default Chapter;
