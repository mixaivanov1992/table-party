import React from 'react';
import { useDispatch } from 'react-redux';
import { setSheetCount, setChapterName, removeChapter } from '@src/store/reducer/chapterReducer';
import Settings from './Settings';

interface Props {
    sheetCount: number,
    chapterIndex: string,
    chapterNumber: number,
    chapterName: string
}

const SettingsContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const {
        sheetCount, chapterIndex, chapterNumber, chapterName,
    } = props;

    const onClickRemoveChapter = (index: string): void => {
        dispatch(removeChapter(index));
    };

    const onChangeChapterName = (name: string): void => {
        dispatch(setChapterName(chapterIndex, name));
    };

    const onInputSheet = (count: string): void => {
        dispatch(setSheetCount(chapterIndex, +count));
    };

    return (
        <Settings
            onClickRemoveChapter={onClickRemoveChapter}
            onChangeChapterName={onChangeChapterName}
            onInputSheet={onInputSheet}
            sheetCount={sheetCount}
            chapterIndex={chapterIndex}
            chapterNumber={chapterNumber}
            chapterName={chapterName}
        />
    );
};

export default React.memo(SettingsContainer);
