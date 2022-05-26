import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import Localization from '@src/assets/localization/content/newRule/chapter/settings/sheets/sheetItem';
import styles from '@css/content/newRule/chapters/settings/sheets/sheetItem/SheetItem.module.scss';
import { EditorState, ContentState } from 'draft-js';
import { Editor as Wysiwyg } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import { setActiveSheet } from '@src/store/reducer/activeSheetReducer';

interface Props {
    chapterIndex: number,
    sheetIndex: number
}

const SheetItem:React.FC<Props> = (props) => {
    console.info('sheetItem');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const {
        chapterIndex, sheetIndex,
    } = props;

    const { uid: chapterUid, sheets } = useTypedSelector((state) => state.chapterReducer.chapters[chapterIndex]);
    const { uid: sheetUid, content: sheetContent } = sheets[sheetIndex];
    useTypedSelector((state) => state.activeSheetReducer); // не знаю как грамотно сделать ставлю костыль слежу за состоянием

    const sheetNumber = sheetIndex + 1;

    const { contentBlocks, entityMap } = htmlToDraft(sheetContent);
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    const onClickActivateSheet = () => {
        dispatch(setActiveSheet(chapterUid, sheetUid, sheetContent));
    };

    return (
        <div
            role="button"
            tabIndex={-1}
            onKeyPress={() => {}}
            onClick={() => { onClickActivateSheet(); }}
            key={uuidv4()}
            className={styles.sheet}
        >
            {sheetContent ? (
                <Wysiwyg
                    editorState={editorState}
                    toolbarClassName={styles.toolbar_wysiwyg}
                    readOnly
                />

            ) : <div className={styles.number}>{`${Localization.sheetNumber}${sheetNumber}`}</div>}
        </div>
    );
};

export default SheetItem;
