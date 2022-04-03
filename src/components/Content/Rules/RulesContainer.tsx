import React, { ReactNode } from 'react';
import Rules from './Rules';

interface Props {
    children: ReactNode
}
const RulesContainer: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            {children}
            <Rules />
        </>
    );
};

export default RulesContainer;
