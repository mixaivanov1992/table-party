import React, { ReactNode } from 'react';
import MyRules from './MyRules';

interface Props {
    children: ReactNode
}
const MyRulesContainer: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            {children}
            <MyRules />
        </>
    );
};

export default MyRulesContainer;
