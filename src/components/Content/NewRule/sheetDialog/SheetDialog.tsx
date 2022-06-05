import { CSSTransition } from 'react-transition-group';
import { setActiveSheet } from '@src/store/reducer/activeSheetReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import Content from '@components/Content/NewRule/SheetDialog/Content/Content';
import Dialog from '@shared/Dialog/Dialog';
import Footer from '@components/Content/NewRule/SheetDialog/Footer/Footer';
import Localization from '@src/assets/localization/content/newRule/sheetDialog';
import React from 'react';
import styles from '@css/content/newRule/sheetDialog/SheetDialog.module.scss';

const SheetDialog:React.FC = () => {
    console.info('SheetDialog');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const onClickCloseDialog = () => {
        const chapterUid = ''; const sheetUid = ''; const content = ''; const cover = '';
        dispatch(setActiveSheet(chapterUid, sheetUid, content, cover));
    };

    const {
        chapterUid, sheetUid,
    } = useTypedSelector((state) => state.activeSheetReducer);

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
                beforeFooter={<Footer />}
                footer={(
                    <div>
                        <button type="button" onClick={onClickCloseDialog}>{Localization.close}</button>
                    </div>
                )}
                dialogSize="90"
                content={(
                    <Content />
                )}
            />
        </CSSTransition>
    );
};

export default SheetDialog;
