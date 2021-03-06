import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/components/content/about';
import React, { ReactNode } from 'react';
import styles from '@css/content/about/About.module.scss';

interface Props {
    children: ReactNode
}
const About: React.FC<Props> = (props) => {
    Localization.setLanguage(navigator.language);
    const { children } = props;
    return (
        <>
            {children}
            <div className={styles.about}>
                {
                    Localization.about.map((localization) => <p key={uuidv4()} className={styles.text}>{localization}</p>)
                }
            </div>
        </>
    );
};

export default About;
