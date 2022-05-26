import React from 'react';
import Dialog from '@shared/Dialog/Dialog';
import Editor from '@shared/Editor/Editor';
import { CSSTransition } from 'react-transition-group';
import Localization from '@src/assets/localization/content/newRule/sheetDialog';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import styles from '@css/content/newRule/sheetDialog/SheetDialog.module.scss';
import { setSheetContent } from '@src/store/reducer/chapterReducer';
import { useDispatch } from 'react-redux';
import { setActiveSheet } from '@src/store/reducer/activeSheetReducer';

const SheetDialog:React.FC = () => {
    console.info('sheetDialog');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const onClickCloseDialog = () => {
        const chapterUid = ''; const sheetUid = ''; const sheetContent = '';
        dispatch(setActiveSheet(chapterUid, sheetUid, sheetContent));
    };

    const dialogFooter: JSX.Element = <button type="button" onClick={() => { onClickCloseDialog(); }}>{Localization.close}</button>;

    const { chapterUid, sheetUid, content: sheetContent } = useTypedSelector((state) => state.activeSheetReducer);

    const editorResult = (html: string) => {
        dispatch(setSheetContent(chapterUid, sheetUid, html));
    };

    return (
        <CSSTransition
            in={!!chapterUid && !!sheetUid}
            timeout={300}
            classNames={{
                enter: styles.dialog_enter,
                enterActive: styles.dialog_enter_active,
                exit: styles.dialog_exit,
                exitActive: styles.dialog_exit_active,
            }}
            mountOnEnter
            unmountOnExit
        >
            <Dialog
                onClickCloseDialog={onClickCloseDialog}
                title={Localization.dataEntry}
                footer={dialogFooter}
                dialogSize="90"
                content={(
                    <Editor
                        initialState={sheetContent}
                        language={language}
                        editorResult={editorResult}
                    />
                )}
            />
        </CSSTransition>
    );
};

export default SheetDialog;
