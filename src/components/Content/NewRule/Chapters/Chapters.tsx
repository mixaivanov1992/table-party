import { useTypedSelector } from '@hooks/useTypedSelector';
import Localization from '@localization/content/newRule/chapter';
import Paginate from '@shared/Paginate/Paginate';
import React from 'react';
import styles from '@css/content/newRule/chapters/Chapters.module.scss';
// import { v4 as uuidv4 } from 'uuid';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Settings from './Settings/Settings';
import Sheets from './Sheets/Sheets';

const Chapter: React.FC = () => {
    console.info('Chapter');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

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
            <Sheets chapterIndex={index + emptyIndex} />
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
