import React, { useState } from 'react';
import styles from '@css/content/newRule/chapter/sheet/Sheet.module.scss';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import Dialog from './Dialog/Dialog';

interface Props {
    sheetCount: number,
}
const Sheet: React.FC<Props> = (props) => {
    console.debug('Sheet');
    const [showDialog, setShowDialog] = useState(false);
    const onClickShowDialog = (isShow) => setShowDialog(isShow);

    const { sheetCount } = props;
    return (
        <div className={styles.sheet}>
            {
                [...Array(sheetCount)].map(
                    (empty, index) => (
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={() => {}}
                            onClick={() => { onClickShowDialog(true); }}
                            key={uuidv4()}
                            className={styles.item}
                        >
                            <div>
                                Лист №
                                {index + 1}
                            </div>
                        </div>
                    ),
                )
            }
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
    );
};

export default React.memo(Sheet);
