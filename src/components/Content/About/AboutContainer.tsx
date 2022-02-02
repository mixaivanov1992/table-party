import React, { ReactNode } from 'react';
interface Props {
    children: ReactNode
}
const AboutContainer: React.FC<Props> = (props) => {
    return (
        <>
            {props.children}
            <div></div>
        </>
    );
}

export default AboutContainer;