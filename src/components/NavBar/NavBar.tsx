import { AccessiblePages } from '@models/accessiblePage';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/navBar';
import React from 'react';
import styles from '@css/navBar/NavBar.module.scss';

interface Props {
    accessiblePages: AccessiblePages
}

const NavBar: React.FC<Props> = (props) => {
    console.debug('MinNavBar');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { accessiblePages } = props;

    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    accessiblePages.map((accessiblePage) => {
                        const {
                            pageRoute, pageRedirect, pageAlias, linkIcon,
                        } = accessiblePage;
                        const Icon = linkIcon;

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const location = useLocation();
                        if (location.pathname === pageRoute || (pageRedirect && location.pathname === pageRedirect)) {
                            return (
                                <li key={uuidv4()} className={styles.active}>
                                    <Link data-localization={Localization[pageAlias]} to={pageRoute}>
                                        <Icon />
                                    </Link>
                                </li>
                            );
                        }
                        return (
                            <li key={uuidv4()}>
                                <Link data-localization={Localization[pageAlias]} to={pageRoute}>
                                    <Icon />
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
};

export default NavBar;
