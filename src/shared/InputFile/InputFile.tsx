import React from 'react';
import styles from '@css/shared/inputFile/InputFile.module.scss';

interface Props {
    onChangeFile(event: React.ChangeEvent<HTMLInputElement>): void,
    name: string,
    text: string,
    accept: string,
    isDisabled: boolean
}

const Checkbox:React.FC<Props> = (props) => {
    const {
        onChangeFile, name, text, accept, isDisabled,
    } = props;
    return (
        <label htmlFor={name} className={styles.file}>
            <input onChange={onChangeFile} type="file" value="" id={name} name={name} accept={accept} disabled={isDisabled} />
            <span>{text}</span>
        </label>
    );
};

export default Checkbox;
