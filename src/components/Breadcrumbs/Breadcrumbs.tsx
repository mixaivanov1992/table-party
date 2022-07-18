import { AccessiblePages } from '@models/accessiblePage';
import { Link } from 'react-router-dom';
import Localization from '@localization/components/breadcrumbs/';
import React from 'react';
import styles from '@css/breadcrumbs/Breadcrumbs.module.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

interface Props {
    accessiblePages: AccessiblePages
}

const Breadcrumbs: React.FC<Props> = (props) => {
    Localization.setLanguage(navigator.language);
    const breadcrumbs = useBreadcrumbs();
    const { accessiblePages } = props;

    return (
        <ul className={styles.breadcrumbs}>
            {
                breadcrumbs.map(({ match }) => {
                    for (const accessiblePage of accessiblePages) {
                        const { pageRoute, pageAlias } = accessiblePage;

                        if (match.url === pageRoute) {
                            return (
                                <li key={pageRoute}>
                                    <Link to={pageRoute}>{Localization[pageAlias]}</Link>
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
