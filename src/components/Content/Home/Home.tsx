import React from 'react';
import styles from '@css/content/home/Home.module.scss';
import Localization from '@localization/home';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            {
                Localization.description.map((localization, index) => {
                    return <p key={index} className={styles.text}>{localization}</p>
                })
            }
        </div>
    );
}

export default Home;