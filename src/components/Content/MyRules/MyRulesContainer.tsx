import React, { ReactNode } from 'react';
import MyRules from './MyRules';

interface Props {
    children: ReactNode
}
const MyRulesContainer: React.FC<Props> = (props) => {
    return (
        <>
            {props.children}
            <MyRules />
        </>
    );
}

export default MyRulesContainer;