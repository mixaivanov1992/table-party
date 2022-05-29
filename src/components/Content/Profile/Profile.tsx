import React, { ReactNode } from 'react';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import Localization from '@localization/content/profile/profile';

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
            <div>123</div>
        </>
    );
};

export default Profile;
