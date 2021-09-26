import React from 'react';
import styles from '@css/Content.module.scss';
import { ContentPath } from '@src/assets/interfaces-types/path';


interface Props {
    path: ContentPath
}

const Content: React.FC<Props> = (props) => {
    console.debug('Header', 'page-'+props.path);
    return (
        <div className={styles.content}>{props.path}</div>
    );
}

export default Content;