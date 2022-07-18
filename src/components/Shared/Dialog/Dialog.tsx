import { CSSTransition } from 'react-transition-group';
import React, { useEffect } from 'react';
import styles from '@css/shared/dialog/Dialog.module.scss';

interface Props {
    onClickCloseDialog(): void,
    isOpen: boolean,
    title: string,
    content: JSX.Element,
    beforeFooter?: JSX.Element,
    footer: JSX.Element,
    dialogSize?: string,
}
const Dialog: React.FC<Props> = (props) => {
    console.info('Dialog');
    const {
        onClickCloseDialog, isOpen, title, content, beforeFooter, footer, dialogSize,
    } = props;
    const stylesDialogSize = styles[`dialog_${dialogSize}`];
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames={{
                enter: 'dialog_enter',
                enterActive: 'dialog_enter_active',
                exit: 'dialog_exit',
                exitActive: 'dialog_exit_active',
            }}
            mountOnEnter
            unmountOnExit
        >
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
                    {beforeFooter && (
                        <div className={styles.before_footer}>
                            {beforeFooter}
                        </div>
                    )}
                    <div className={styles.footer}>
                        {footer}
                    </div>
                </div>
                <div className={styles.dialog_background} />
            </>
        </CSSTransition>
    );
};
Dialog.defaultProps = {
    beforeFooter: undefined,
    dialogSize: '50',
};

export default Dialog;
