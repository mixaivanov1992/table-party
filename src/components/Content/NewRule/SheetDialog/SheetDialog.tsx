import { setActiveSheet } from '@store/reducer/activeSheetReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Content from '@components/Content/NewRule/SheetDialog/Content/Content';
import Dialog from '@shared/Dialog/Dialog';
import Footer from '@components/Content/NewRule/SheetDialog/Footer/Footer';
import Localization from '@localization/components/content/newRule/sheetDialog';
import React from 'react';

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

    const isOpen = !!chapterUid && !!sheetUid;

    return (
        <Dialog
            isOpen={isOpen}
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
    );
};

export default SheetDialog;
