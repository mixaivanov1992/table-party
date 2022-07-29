import Content from '@shared/RuleEdit/Chapters/Sheets/SheetItem/SheetDialog/Content/Content';
import Dialog from '@shared/Dialog/Dialog';
import Footer from '@shared/RuleEdit/Chapters/Sheets/SheetItem/SheetDialog/Footer/Footer';
import Localization from '@localization/components/shared/ruleEdit/chapter/settings/sheets/sheetItem/sheetDialog';
import React, { useState } from 'react';
import styles from '@css/shared/ruleEdit/chapters/sheets/sheetItem/sheetDialog/SheetDialog.module.scss';

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
    const [errorMessage, setErrorMessage] = useState<string>('');

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
                    errorMessage={setErrorMessage}
                />
            )}
            footer={(
                <div>
                    <button type="button" onClick={onClickCloseDialog}>{Localization.close}</button>
                </div>
            )}
            dialogSize="90"
            content={(
                <>
                    <Content
                        chapterUid={chapterUid}
                        sheetUid={sheetUid}
                        sheetIndex={sheetIndex}
                        errorMessage={setErrorMessage}
                    />
                    <div className={styles.error}>{errorMessage}</div>
                </>
            )}
        />
    );
};

export default SheetDialog;
