import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/home';
import React, { ReactNode } from 'react';
import styles from '@css/content/home/Home.module.scss';

interface Props {
    children: ReactNode
}
const Home: React.FC<Props> = (props) => {
    console.info('Home');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);
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
