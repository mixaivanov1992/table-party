import React from "react";

interface Props{
    value: number,
    setValue(value:number, index?: number): void
}

const InputNumber: React.FC<Props> = (props) => {
    return(
        <>
            <input type="number" onInput={(e) => {
                let value = (e.currentTarget as HTMLInputElement).value.replace(/^0/, '');
                
                if(new RegExp('^[0-9]*$').test(value) && new RegExp('^(?!\s*$).+').test(value)){
                    props.setValue(parseInt(value));
                }
            }} value={props.value} />
        </>
    );
}

export default InputNumber;