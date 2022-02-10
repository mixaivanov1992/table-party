import React from "react";
import styles from '@css/content/newRule/row/column/Column.module.scss';
import DialogContainer from "./Dialog/DialogContainer";
import { CSSTransition } from 'react-transition-group';

interface Props {
    onClickShowDialog(isShow: boolean): void,
    onClickRemoveRow(index: string): void,
    columnCount: number,
    rowIndex: string,
    showDialog: boolean
    number: number,
}

const Column: React.FC<Props> = (props) => {
    console.debug('Column');
    return (
        <>
            {
                [...Array(props.columnCount)].map((element, index) => {
                    return <div onClick={()=>{ props.onClickShowDialog(true) }} key={index} className={styles.column}>column</div>
                })
            }
            <div className={styles.remove}>
                <div>№{props.number}</div>
                <button onClick={
                    () => {
                        props.onClickRemoveRow(props.rowIndex);
                    }
                }>&#10005;</button>
            </div>
                <CSSTransition
                    in={props.showDialog}
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
                        onClickShowDialog = {props.onClickShowDialog}
                    />
                </CSSTransition>
        </>
    );
}

export default Column;