import { useTypedSelector } from '@hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/components/content/profile';
import MyRules from '@components/Content/Profile/MyRules/MyRules';
import React, { ReactNode, useState } from 'react';
import styles from '@css/content/profile/Profile.module.scss';

interface Props {
    children: ReactNode
}

const Profile: React.FC<Props> = (props) => {
    console.info('Profile');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { children } = props;
    const [activeTab, setActiveTab] = useState<number>(0);

    const Content:Array<JSX.Element> = [<MyRules />];
    const li:Array<JSX.Element> = [Localization.myRules].map((name: string, index:number) => (
        <li
            key={uuidv4()}
            role="menuitem"
            onKeyPress={() => {}}
            onClick={() => { setActiveTab(index); }}
            className={index === activeTab ? styles.active : ''}
        >
            {name}
        </li>
    ));

    return (
        <>
            {children}
            <div className={styles.profile}>
                <ul>{li}</ul>
                <div className={styles.content}>
                    {Content[activeTab]}
                </div>
            </div>
        </>
    );
};

export default Profile;
