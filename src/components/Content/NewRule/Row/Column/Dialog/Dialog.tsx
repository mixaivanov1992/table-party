import React, { useEffect } from 'react';
import styles from '@css/content/newRule/row/column/dialog/Dialog.module.scss';
import Editor from '@shared/Editor/Editor';

interface Props {
    onClickShowDialog(isShow: boolean): void
}

const Dialog: React.FC<Props> = (props) => {
    console.debug('Dialog');

    useEffect(() => {
        // function handleKeyPress(event){
        //     if(!(event.target as HTMLElement).matches('.window-dialog-element')){
        //         event.preventDefault();
        //     }
        // }
        document.body.style.overflow = 'hidden';
        // window.addEventListener('keypress', handleKeyPress);
        return () => {
            document.body.style.overflow = 'auto';
            // window.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    const { onClickShowDialog } = props;
    return (
        <>
            <div className={styles.dialog}>
                <div className={styles.header}>
                    <div className={styles.title}>Выбор компонента</div>
                    <div role="button" onClick={() => { onClickShowDialog(false); }} className={styles.close}>&#10005;</div>
                </div>
                <div className={styles.container}>
                    <Editor />
                </div>
                <div className={styles.footer}>
                    <button type="button" onClick={() => { onClickShowDialog(false); }}>Отмена</button>
                    <button type="button" onClick={() => { onClickShowDialog(false); }}>Применить</button>
                </div>
            </div>
            <div className={styles.dialog_background} />
        </>
    );
};

export default Dialog;
