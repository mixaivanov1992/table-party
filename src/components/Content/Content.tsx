import React from 'react';
import styles from '@css/Content.module.scss';
import { ContentPath, Path } from '@src/assets/interfaces-types/path';
import LibraryContainer from '@components/Content/Library/LibraryContainer';
import HomeContainer from './Home/HomeContainer';
import AboutContainer from './About/AboutContainer';
import RulesContainer from './Rules/RulesContainer';


interface Props {
    path: ContentPath
}

const Content: React.FC<Props> = (props) => {
    console.debug('Header', 'page-'+props.path);


	const chunk = (path:ContentPath) => {
        switch(path){
            case Path.library:
                return (
                    <div>
                        <div className={styles.header}>library</div>
                        <LibraryContainer />
                    </div>
                );
            case Path.home:
                return (
                    <div>
                        <div className={styles.header}>home</div>
                        <HomeContainer />
                    </div>
                );
            case Path.about:
                return (
                    <div>
                        <div className={styles.header}>about</div>
                        <AboutContainer />
                    </div>
                );
            case Path.rules:
                return (
                    <div>
                        <div className={styles.header}>rules</div>
                        <RulesContainer />
                    </div>
                );
        }
	}

    return (
        <div className={styles.content}>
            {chunk(props.path)}
        </div>
    );
}

export default Content;