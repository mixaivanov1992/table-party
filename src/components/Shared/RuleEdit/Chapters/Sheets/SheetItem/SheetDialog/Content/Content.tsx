import { setSheetContent } from '@store/reducer/sheetReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Editor from '@shared/Editor/Editor';
import React from 'react';

interface Props {
    chapterUid: string,
    sheetUid: string,
    sheetIndex: number,
    errorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Content:React.FC<Props> = (props) => {
    console.info('SheetDialog-Content');
    const dispatch = useDispatch();

    const {
        chapterUid, sheetUid, sheetIndex, errorMessage,
    } = props;
    const sheetContent = useTypedSelector((state) => state.sheetReducer[chapterUid][sheetIndex].content);

    const editorResult = (html: string) => {
        dispatch(setSheetContent(chapterUid, sheetUid, html));
    };

    return (
        <Editor
            initialState={sheetContent}
            editorResult={editorResult}
            errorMessage={errorMessage}
        />
    );
};

export default Content;
