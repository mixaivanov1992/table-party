import React from 'react';

interface Props{
    value: number,
    inputRow(value: string): void
}

const InputNumber: React.FC<Props> = (props) => {
    const { inputRow, value } = props;
    return (
        <input
            type="text"
            onInput={(e) => {
                const targetValue = e.currentTarget.value;
                if ((new RegExp('^[1-9]').test(targetValue) && new RegExp('^[0-9]+$').test(targetValue)) || targetValue === '') {
                    inputRow(targetValue);
                }
            }}
            value={String(value).replace(/^0/, '')}
        />
    );
};

export default InputNumber;
