import React from 'react';
import styles from '@css/content/home/Home.module.scss';
import Localization from '@localization/home';
import { v4 as uuidv4 } from 'uuid';

const Home: React.FC = () => (
    <div className={styles.home}>
        {
            Localization.description.map((localization) => <p key={uuidv4()} className={styles.text}>{localization}</p>)
        }
    </div>
);

export default Home;
