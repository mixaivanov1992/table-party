import React from 'react';
import styles from '@css/Content.module.scss';
import NavBar from '@components/Content/NavBar/NavBar';

interface Props{}

const Content: React.FC<Props> = (props) => {
    return (
        <div className={styles.content}>
            <NavBar />
        </div>
    );
}

export default Content;