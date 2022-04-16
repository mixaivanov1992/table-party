import React, { useState } from 'react';
import { removeChapter } from '@src/store/reducer/chapterReducer';
import { useDispatch } from 'react-redux';
import Column from './Column';

interface Props {
    columnCount: number,
    chapterIndex: string,
    number: number,
}
const ColumnContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);

    const onClickShowDialog = (isShow) => setShowDialog(isShow);
    const onClickRemoveChapter = (chapterIndex: string): void => {
        dispatch(removeChapter(chapterIndex));
    };

    const { columnCount, chapterIndex, number } = props;
    return (
        <Column
            onClickShowDialog={onClickShowDialog}
            onClickRemoveChapter={onClickRemoveChapter}
            columnCount={columnCount}
            chapterIndex={chapterIndex}
            showDialog={showDialog}
            number={number}
        />
    );
};

export default ColumnContainer;
