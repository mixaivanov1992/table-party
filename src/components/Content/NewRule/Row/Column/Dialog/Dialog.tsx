import React from "react";
import styles from '@css/content/newRule/row/column/dialog/Dialog.module.scss';

interface Props {
}

const Dialog: React.FC<Props> = (props) => {
    console.debug('Dialog');
    return (
        <>
            <div className={styles.dialog}>
                <div className={styles.header}>
                    <div className={styles.title}>Выбор компонента</div>
                    <div className={styles.close}>&#10005;</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.elements}>
                        <div className={styles.type}>Текст</div>
                        <div className={styles.type}>Изображение</div>
                        <div className={styles.type}>Файл</div>
                        <div className={styles.type}>Ссылка</div>
                    </div>
                    <div className={styles.content}>content</div>
                </div>
                <div className={styles.footer}>
                    <button>Применить</button>
                    <button>Отмена</button>
                </div>
            </div>
            <div className={styles.dialog_background}></div>
        </>
    );
}

export default Dialog;