import React, { ReactNode } from 'react';
import Home from '@components/Content/Home/Home';

interface Props {
    children: ReactNode
}
const HomeContainer: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            {children}
            <Home />
        </>
    );
};

export default HomeContainer;
