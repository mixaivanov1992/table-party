import React, { ReactNode } from 'react';
import styles from '@css/shared/inputWrapper/InputWrapper.module.scss';

interface Props{
    text: string,
    value: number | string,
    htmlFor: string,
    children: ReactNode
}

const InputWrapper: React.FC<Props> = (props) => {
    const {
        value, text, htmlFor, children,
    } = props;
    return (
        <label className={styles.InputWrapper} htmlFor={htmlFor}>
            {children}
            {value ? <span className={styles.raise}>{text}</span> : <span>{text}</span>}
        </label>
    );
};

export default InputWrapper;
