import { setSheetContent } from '@store/reducer/sheetReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Editor from '@shared/Editor/Editor';
import React from 'react';

const Content:React.FC = () => {
    console.info('SheetDialog-Content');
    const dispatch = useDispatch();

    const {
        chapterUid, sheetUid, content: sheetContent,
    } = useTypedSelector((state) => state.activeSheetReducer);

    const editorResult = (html: string) => {
        dispatch(setSheetContent(chapterUid, sheetUid, html));
    };

    return (
        <Editor
            initialState={sheetContent}
            editorResult={editorResult}
        />
    );
};

export default Content;
