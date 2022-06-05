import React from 'react';
import Editor from '@shared/Editor/Editor';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { setSheetContent } from '@src/store/reducer/chapterReducer';
import { useDispatch } from 'react-redux';

const Content:React.FC = () => {
    console.info('SheetDialog-Content');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);

    const {
        chapterUid, sheetUid, content: sheetContent,
    } = useTypedSelector((state) => state.activeSheetReducer);

    const editorResult = (html: string) => {
        dispatch(setSheetContent(chapterUid, sheetUid, html));
    };

    return (
        <Editor
            initialState={sheetContent}
            language={language}
            editorResult={editorResult}
        />
    );
};

export default Content;
