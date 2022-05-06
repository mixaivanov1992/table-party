import React from 'react';
import styles from '@css/content/newRule/chapter/Chapter.module.scss';
import InputNumber from '@shared/InputNumber/InputNumber';
import { ChapterState } from '@src/assets/interfaces-types/chapterReducer';
import Paginate from '@shared/Paginate/Paginate';
import Localization from '@src/assets/localization/content/newRule/chapter';
import SheetContainer from './Sheet/SheetContainer';
import SettingsContainer from './Settings/SettingsContainer';

interface Props {
    onClickChapterAdd(): void,
    onClickDeleteChapters(): void,
    onInputChapter(chapterCount: string): void,
    chapterState: ChapterState,
    chapterCount: number,
}
const Chapter: React.FC<Props> = (props) => {
    console.debug('Chapter');
    const {
        chapterState, chapterCount, onInputChapter, onClickChapterAdd, onClickDeleteChapters,
    } = props;
    const emptyIndex = 1;
    const chapters = chapterState.chapters.slice(emptyIndex);
    const paginateItems = [...Array(chapters.length)].map((empty, i) => i);
    const chapterItems = chapters.map((chapterData, chapterNumber) => (
        <div className={styles.container}>
            <SettingsContainer chapterIndex={chapterData.index} sheetCount={chapterData.sheetCount} chapterNumber={chapterNumber + 1} chapterName={chapterData.name} />
            <SheetContainer sheetCount={chapterData.sheetCount} />
        </div>
    ));

    return (
        <div className={styles.chapter}>
            <div className={styles.settings}>
                <InputNumber
                    index="chapter"
                    value={chapterCount}
                    onInputData={onInputChapter}
                />
                <button type="button" onClick={onClickChapterAdd}>{Localization.addChapter}</button>
                <button type="button" onClick={onClickDeleteChapters}>{Localization.deleteChapters}</button>
            </div>
            {!!paginateItems.length && <Paginate content={chapterItems} items={paginateItems} itemsPerPage={5} />}
        </div>
    );
};
export default Chapter;
