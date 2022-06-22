import { useTypedSelector } from '@hooks/useTypedSelector';
import Paginate from '@shared/Paginate/Paginate';
import React from 'react';
import SheetItem from '@components/Content/NewRule/Chapters/Sheets/SheetItem/SheetItem';
import styles from '@css/content/newRule/chapters/sheets/Sheets.module.scss';

interface Props {
    chapterIndex: number,
}
const Sheets: React.FC<Props> = (props) => {
    console.info('sheets');

    const sheetCountPerPage = 3;
    const { chapterIndex } = props;
    const chapterSheetCount = useTypedSelector((state) => state.chapterReducer.chapters[chapterIndex].sheetCount);
    const chapterUid = useTypedSelector((state) => state.chapterReducer.chapters[chapterIndex].uid);

    const renderContent = (index: number): JSX.Element => (
        <SheetItem chapterUid={chapterUid} chapterIndex={chapterIndex} sheetIndex={index} />
    );

    return (
        <div className={styles.sheets}>
            {!!chapterSheetCount && <Paginate renderContent={renderContent} itemCount={chapterSheetCount} itemsPerPage={sheetCountPerPage} />}
        </div>
    );
};

export default Sheets;
