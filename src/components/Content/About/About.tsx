import React, { ReactNode } from 'react';
import styles from '@css/content/about/About.module.scss';
import Localization from '@localization/about';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';

interface Props {
    children: ReactNode
}
const About: React.FC<Props> = (props) => {
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);
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
