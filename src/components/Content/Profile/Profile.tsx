import { useTypedSelector } from '@hooks/useTypedSelector';
import Localization from '@localization/content/profile/profile';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const Profile: React.FC<Props> = (props) => {
    console.info('Profile');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);
    const { children } = props;

    return (
        <>
            {children}
            <div>
                <ul>
                    <li>Локализация</li>
                </ul>
                <div>123</div>
            </div>
        </>
    );
};

export default Profile;
