import React from 'react';
import styles from '@css/content/newRule/chapter/Chapter.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';
import { ChapterState } from '@src/assets/interfaces-types/chapterReducer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SheetContainer from './Sheet/SheetContainer';
import SettingsContainer from './Settings/SettingsContainer';

interface Props {
    onClickChapterAdd(): void,
    onInputChapter(chapterCount: string): void,
    chapterState: ChapterState,
    chapterCount: number,
}
const Chapter: React.FC<Props> = (props) => {
    console.debug('Chapter');
    const {
        chapterState, chapterCount, onInputChapter, onClickChapterAdd,
    } = props;

    const chapters = chapterState.chapters.map((chapterData, chapterNumber) => {
        if (chapterData.index) {
            return (
                <CSSTransition
                    key={chapterData.index}
                    timeout={200}
                    classNames={{
                        enter: styles.chapter_enter,
                        enterActive: styles.chapter_enter_active,
                        exit: styles.chapter_exit,
                        exitActive: styles.chapter_exit_active,
                    }}
                >
                    <div className={styles.chapter}>
                        <SettingsContainer chapterIndex={chapterData.index} sheetCount={chapterData.sheetCount} chapterNumber={chapterNumber} chapterName={chapterData.name} />
                        <SheetContainer sheetCount={chapterData.sheetCount} />
                    </div>
                </CSSTransition>
            );
        }
        return undefined;
    });
    return (
        <div className={styles.container}>
            <div>
                <InputNumber
                    index="chapter"
                    value={chapterCount}
                    onInputData={onInputChapter}
                />
                <button type="button" onClick={onClickChapterAdd}>Добавить раздел(ы)</button>
            </div>
            <TransitionGroup>
                {chapters}
            </TransitionGroup>
        </div>
    );
};
export default Chapter;
