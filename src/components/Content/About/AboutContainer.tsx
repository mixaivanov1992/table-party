import React, { ReactNode } from 'react';
import About from './About';

interface Props {
    children: ReactNode
}
const AboutContainer: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            {children}
            <About />
        </>
    );
};

export default AboutContainer;
