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

    const inputChapter = (count: string): void => {
        setChapterCount(+count);
    };

    return (
        <Chapter
            onClickChapterAdd={onClickChapterAdd}
            inputChapter={inputChapter}
            chapterState={chapterState}
            chapterCount={chapterCount}
        />
    );
};

export default ChapterContainer;