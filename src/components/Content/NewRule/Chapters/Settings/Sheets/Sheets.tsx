import React from 'react';
import Paginate from '@shared/Paginate/Paginate';
import styles from '@css/content/newRule/chapters/settings/sheets/Sheets.module.scss';
import SheetItem from './SheetItem/SheetItem';

interface Props {
    chapterSheetCount: number,
    chapterIndex: number,
}
const Sheets: React.FC<Props> = (props) => {
    console.info('sheets');

    const sheetCountPerPage = 3;
    const { chapterSheetCount, chapterIndex } = props;

    const renderContent = (index: number): JSX.Element => (
        <SheetItem chapterIndex={chapterIndex} sheetIndex={index} />
    );

    return (
        <div className={styles.sheets}>
            {!!chapterSheetCount && <Paginate renderContent={renderContent} itemCount={chapterSheetCount} itemsPerPage={sheetCountPerPage} />}
        </div>
    );
};

export default Sheets;
