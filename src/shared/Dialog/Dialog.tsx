import React, { useEffect } from 'react';
import styles from '@css/shared/dialog/Dialog.module.scss';

interface Props {
    onClickCloseDialog(): void,
    title: string,
    content: JSX.Element,
    footer: JSX.Element,
    dialogSize: string
}
const Dialog: React.FC<Props> = (props) => {
    console.debug('Dialog');
    const {
        onClickCloseDialog, title, content, footer, dialogSize,
    } = props;
    const stylesDialogSize = styles[`dialog_${dialogSize}`];
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <div className={`${styles.dialog} ${stylesDialogSize}`}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <div
                        role="button"
                        tabIndex={-1}
                        onKeyPress={() => {}}
                        onClick={() => { onClickCloseDialog(); }}
                        className={styles.close}
                    >
                        &#10005;
                    </div>
                </div>
                <div className={styles.container}>
                    {content}
                </div>
                <div className={styles.footer}>
                    {footer}
                </div>
            </div>
            <div className={styles.dialog_background} />
        </>
    );
};

export default React.memo(Dialog);
