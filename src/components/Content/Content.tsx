import React from 'react';
import styles from '@css/Content.module.scss';
import { ContentPath, Path } from '@src/assets/interfaces-types/path';
import LibraryContainer from '@components/Content/Library/LibraryContainer';


interface Props {
    path: ContentPath
}

const Content: React.FC<Props> = (props) => {
    console.debug('Header', 'page-'+props.path);


	const chunk = (path:ContentPath) => {
        switch(path){
            case Path.library:
                return <LibraryContainer />;
            // case Path.home:
            //     return <HomeContainer />;
            // case Path.about:
            //     return <AboutContainer />;
            // case Path.rules:
            //     return <RulesContainer />;
        }
	}

    return (
        <div className={styles.content}>
            {chunk(props.path)}
        </div>
    );
}

export default Content;