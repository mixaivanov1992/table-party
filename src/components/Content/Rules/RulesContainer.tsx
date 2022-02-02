import React, { ReactNode } from 'react';
import Rules from './Rules';

interface Props {
    children: ReactNode
}
const RulesContainer: React.FC<Props> = (props) => {
    return (
        <>
            {props.children}
            <Rules />
        </>
    );
}

export default RulesContainer;