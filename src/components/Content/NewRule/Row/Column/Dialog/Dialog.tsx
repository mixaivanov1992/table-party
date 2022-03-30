import React, { useEffect } from "react";
import styles from '@css/content/newRule/row/column/dialog/Dialog.module.scss';
import Editor from '@shared/Editor/Editor';

interface Props {
    onClickShowDialog(isShow: boolean): void
}

const Dialog: React.FC<Props> = (props) => {
    console.debug('Dialog');

    useEffect(()=>{
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
        }
    }, []);

    return (
        <>
            <div className={styles.dialog}>
                <div className={styles.header}>
                    <div className={styles.title}>Выбор компонента</div>
                    <div onClick={()=>{ props.onClickShowDialog(false) }} className={styles.close}>&#10005;</div>
                </div>
                <div className={styles.container}>
                    <Editor />
                </div>
                <div className={styles.footer}>
                    <button onClick={()=>{ props.onClickShowDialog(false) }}>Отмена</button>
                    <button>Применить</button>
                </div>
            </div>
            <div className={styles.dialog_background}></div>
        </>
    );
}

export default Dialog;