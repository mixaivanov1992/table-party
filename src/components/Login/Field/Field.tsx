import InputWrapper from '@shared/InputWrapper/InputWrapper';
import React from 'react';

interface Props {
    text: string,
    value: string,
    type: string,
    id: string,
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const Field: React.FC<Props> = (props) => {
    const {
        text, value, type, id, setState,
    } = props;
    return (
        <div>
            <InputWrapper
                htmlFor={id}
                text={text}
                value={value}
            >
                <input
                    onChange={(e) => { setState(e.currentTarget.value.trim()); }}
                    type={type}
                    id={id}
                    value={value}
                />
            </InputWrapper>
        </div>
    );
};
export default Field;
