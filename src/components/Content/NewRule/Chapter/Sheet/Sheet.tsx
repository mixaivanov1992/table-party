import React from 'react';
import styles from '@css/content/newRule/chapter/sheet/Sheet.module.scss';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import DialogContainer from './Dialog/DialogContainer';

interface Props {
    onClickShowDialog(isShow: boolean): void,
    sheetCount: number,
    showDialog: boolean
}

const Sheet: React.FC<Props> = (props) => {
    console.debug('Sheet');
    const {
        sheetCount, showDialog, onClickShowDialog,
    } = props;
    return (
        <>
            {
                [...Array(sheetCount)].map(
                    (empty, index) => (
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={() => {}}
                            onClick={() => { onClickShowDialog(true); }}
                            key={uuidv4()}
                            className={styles.sheet}
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
                <DialogContainer
                    onClickShowDialog={onClickShowDialog}
                />
            </CSSTransition>
        </>
    );
};

export default Sheet;
