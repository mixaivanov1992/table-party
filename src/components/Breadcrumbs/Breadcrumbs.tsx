import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@css/breadcrumbs/Breadcrumbs.module.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import Localization from '@localization/breadcrumbs/';
import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';

interface Props {
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const Breadcrumbs: React.FC<Props> = (props) => {
    const breadcrumbs = useBreadcrumbs();
    const { accessiblePages } = props;
    // Localization.setLanguage('en');
    return (
        <ul className={styles.breadcrumbs}>
            {
                breadcrumbs.map(({ match }) => {
                    for (const pageName in accessiblePages) {
                        if (match.url === accessiblePages[pageName].path) {
                            const localizationIndex = pageName;
                            return (
                                <li key={match.url}>
                                    <Link to={match.url}>{Localization[localizationIndex]}</Link>
                                </li>
                            );
                        }
                    }
                    return undefined;
                })
            }
        </ul>
    );
};

export default Breadcrumbs;
