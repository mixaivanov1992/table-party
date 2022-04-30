import React from 'react';
import { useDispatch } from 'react-redux';
import { setSheetCount, removeChapter } from '@src/store/reducer/chapterReducer';
import Settings from './Settings';

interface Props {
    sheetCount: number,
    chapterIndex: string,
    number: number,
}

const SettingsContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const onClickChangeSheetCount = ((index: string, sheetCount: number) => {
        dispatch(setSheetCount(index, sheetCount));
    });
    const { sheetCount, chapterIndex, number } = props;

    const onClickRemoveChapter = (index: string): void => {
        dispatch(removeChapter(index));
    };

    return (
        <Settings
            onClickRemoveChapter={onClickRemoveChapter}
            onClickChangeSheetCount={onClickChangeSheetCount}
            sheetCount={sheetCount}
            chapterIndex={chapterIndex}
            number={number}
        />
    );
};

export default SettingsContainer;
