import React from 'react';
import styles from '@css/content/about/About.module.scss';
import Localization from '@localization/about';
import { v4 as uuidv4 } from 'uuid';

const About: React.FC = () => (
    <div className={styles.about}>
        {
            Localization.about.map((localization) => <p key={uuidv4()} className={styles.text}>{localization}</p>)
        }
    </div>
);

export default About;
