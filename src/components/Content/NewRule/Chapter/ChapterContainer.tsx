import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { addChapter } from '@src/store/reducer/chapterReducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Chapter from './Chapter';

const ChapterContainer: React.FC = () => {
    const dispatch = useDispatch();
    const chapterState = useTypedSelector((state) => state.chapterReducer);
    const [chapterCount, setChapterCount] = useState(1);

    const onClickChapterAdd = (): void => {
        dispatch(addChapter(chapterCount));
    };

    const onClickDeleteChapters = (): void => {
    };

    const onInputChapter = (count: string): void => {
        setChapterCount(+count);
    };

    return (
        <Chapter
            onClickChapterAdd={onClickChapterAdd}
            onClickDeleteChapters={onClickDeleteChapters}
            onInputChapter={onInputChapter}
            chapterState={chapterState}
            chapterCount={chapterCount}
        />
    );
};

export default ChapterContainer;
