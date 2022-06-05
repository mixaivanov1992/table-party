import React from 'react';
import { AiOutlineBorder, AiOutlineCheckSquare } from 'react-icons/ai';
import styles from '@css/shared/inputCheckbox/InputCheckbox.module.scss';

interface Props {
    onChangeCheckbox(): void,
    name: string,
    text: string,
    isChecked: boolean
}

const InputCheckbox:React.FC<Props> = (props) => {
    const {
        onChangeCheckbox, name, text, isChecked,
    } = props;
    return (
        <label htmlFor={name} className={styles.checkbox}>
            <input onChange={onChangeCheckbox} type="checkbox" id={name} name={name} checked={isChecked} />
            {isChecked ? <AiOutlineCheckSquare /> : <AiOutlineBorder />}
            {text}
        </label>
    );
};

export default InputCheckbox;
