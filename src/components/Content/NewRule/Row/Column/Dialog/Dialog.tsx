import React, { useEffect } from "react";
import styles from '@css/content/newRule/row/column/dialog/Dialog.module.scss';

interface Props {
    onClickShowDialog(isShow: boolean): void
}

const Dialog: React.FC<Props> = (props) => {
    console.debug('Dialog');

    useEffect(()=>{
        function handleKeyPress(event){
            if(!(event.target as HTMLElement).matches('.window-dialog-element')){
                event.preventDefault();
            }
        }
        document.body.style.overflow = 'hidden';
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keypress', handleKeyPress);
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
                    <div className={styles.elements}>
                        <div className={`${styles.type} ${styles.active}`}>Текст</div>
                        <div className={styles.type}>Изображение</div>
                        <div className={styles.type}>Файл</div>
                        <div className={styles.type}>Ссылка</div>
                    </div>
                    <div className={styles.content}>content</div>
                </div>
                <div className={styles.footer}>
                    <button className="window-dialog-element" onClick={()=>{ props.onClickShowDialog(false) }}>Отмена</button>
                    <button className="window-dialog-element">Применить</button>
                </div>
            </div>
            <div className={styles.dialog_background}></div>
        </>
    );
}

export default Dialog;