import React, { useState } from 'react';
import styles from '@css/content/newRule/chapters/settings/sheets/Sheets.module.scss';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import Paginate from '@shared/Paginate/Paginate';
import Localization from '@src/assets/localization/content/newRule/chapter/settings/sheet';
import Dialog from '@shared/Dialog/Dialog';

interface Props {
    chapterSheetCount: number,
    sheets: Array<{
        uid: string,
        content: string
    }>
}
const Sheets: React.FC<Props> = (props) => {
    console.debug('sheets');
    const [showDialog, setShowDialog] = useState(false);
    const onClickShowDialog = (isShow) => setShowDialog(isShow);
    const sheetCountPerPage = 3;

    const { chapterSheetCount, sheets } = props;

    const renderContent = (index: number): JSX.Element => (
        <div
            role="button"
            tabIndex={-1}
            onKeyPress={() => {}}
            onClick={() => { onClickShowDialog(true); }}
            key={uuidv4()}
            className={styles.item}
        >
            <div>
                {sheets[index].content || `${Localization.sheetNumber}${index + 1}`}
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.sheet}>
                {!!chapterSheetCount && <Paginate renderContent={renderContent} itemCount={chapterSheetCount} itemsPerPage={sheetCountPerPage} />}
            </div>
            <div>
                <CSSTransition
                    in={showDialog}
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
                        onClickShowDialog={onClickShowDialog}
                    />
                </CSSTransition>
            </div>
        </>
    );
};

export default React.memo(Sheets);
