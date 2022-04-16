import React from 'react';
import styles from '@css/content/newRule/chapter/column/Column.module.scss';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import DialogContainer from './Dialog/DialogContainer';

interface Props {
    onClickShowDialog(isShow: boolean): void,
    onClickRemoveChapter(index: string): void,
    columnCount: number,
    chapterIndex: string,
    showDialog: boolean
    number: number,
}

const Column: React.FC<Props> = (props) => {
    console.debug('Column');
    const {
        columnCount, chapterIndex, showDialog, number, onClickShowDialog, onClickRemoveChapter,
    } = props;
    return (
        <>
            {
                [...Array(columnCount)].map(
                    () => (
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={() => {}}
                            onClick={() => { onClickShowDialog(true); }}
                            key={uuidv4()}
                            className={styles.column}
                        >
                            column
                        </div>
                    ),
                )
            }
            <div className={styles.remove}>
                <div>
                    №
                    {number}
                </div>
                <button
                    type="button"
                    onClick={
                        () => {
                            onClickRemoveChapter(chapterIndex);
                        }
                    }
                >
                    &#10005;
                </button>
            </div>
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

export default Column;
