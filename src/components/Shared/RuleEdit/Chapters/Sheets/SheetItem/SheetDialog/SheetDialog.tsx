import Content from '@shared/RuleEdit/Chapters/Sheets/SheetItem/SheetDialog/Content/Content';
import Dialog from '@shared/Dialog/Dialog';
import Footer from '@shared/RuleEdit/Chapters/Sheets/SheetItem/SheetDialog/Footer/Footer';
import Localization from '@localization/components/shared/ruleEdit/chapter/settings/sheets/sheetItem/sheetDialog';
import React from 'react';

interface Props {
    onClickCloseDialog: () => void,
    isOpen: boolean,
    chapterUid: string,
    sheetUid: string,
    sheetIndex: number,
}

const SheetDialog:React.FC<Props> = (props) => {
    console.info('SheetDialog');
    Localization.setLanguage(navigator.language);

    const {
        onClickCloseDialog, isOpen, chapterUid, sheetUid, sheetIndex,
    } = props;

    return (
        <Dialog
            isOpen={isOpen}
            onClickCloseDialog={onClickCloseDialog}
            title={Localization.dataEntry}
            beforeFooter={(
                <Footer
                    chapterUid={chapterUid}
                    sheetUid={sheetUid}
                    sheetIndex={sheetIndex}
                />
            )}
            footer={(
                <div>
                    <button type="button" onClick={onClickCloseDialog}>{Localization.close}</button>
                </div>
            )}
            dialogSize="90"
            content={(
                <Content
                    chapterUid={chapterUid}
                    sheetUid={sheetUid}
                    sheetIndex={sheetIndex}
                />
            )}
        />
    );
};

export default SheetDialog;
