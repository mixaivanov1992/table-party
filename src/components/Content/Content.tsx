import React from 'react';
import styles from '@css/Content.module.scss';

interface Props { }

const Content: React.FC<Props> = (props) => {
    return (
        <div className={styles.content}>
            aaa
        </div>
    );
}

export default Content;