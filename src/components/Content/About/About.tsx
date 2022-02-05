import React from 'react';
import styles from '@css/About.module.scss';
import Localization from '@localization/about';

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            {
                Localization.about.map((localization, index) => {
                    return <p key={index} className={styles.text}>{localization}</p>
                })
            }
        </div>
    );
}

export default About;