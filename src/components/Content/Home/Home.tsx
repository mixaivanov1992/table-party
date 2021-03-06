import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/components/content/home';
import React, { ReactNode } from 'react';
import styles from '@css/content/home/Home.module.scss';

interface Props {
    children: ReactNode
}
const Home: React.FC<Props> = (props) => {
    console.info('Home');
    Localization.setLanguage(navigator.language);
    const { children } = props;
    return (
        <>
            {children}
            <div className={styles.home}>
                {
                    Localization.description.map((localization) => <p key={uuidv4()} className={styles.text}>{localization}</p>)
                }
            </div>
        </>
    );
};

export default Home;
