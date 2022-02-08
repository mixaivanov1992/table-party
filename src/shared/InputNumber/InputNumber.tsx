import React from "react";

interface Props{
    value: number,
    inputRow(value: string): void
}

const InputNumber: React.FC<Props> = (props) => {
    return(
        <>
            <input type="text" onInput={(e) => {
                const value = (e.currentTarget as HTMLInputElement).value;
                if((new RegExp('^[1-9]').test(value) && new RegExp('^[0-9]+$').test(value)) || value === ''){
                    props.inputRow(value);
                }
            }} value={String(props.value).replace(/^0/, '')} />
        </>
    );
}

export default InputNumber;