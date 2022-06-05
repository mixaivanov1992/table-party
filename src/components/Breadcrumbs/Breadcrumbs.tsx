import { AccessiblePages } from '@interfaces-types/accessiblePage';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import Localization from '@localization/breadcrumbs/';
import React from 'react';
import styles from '@css/breadcrumbs/Breadcrumbs.module.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

interface Props {
    accessiblePages: AccessiblePages
}

const Breadcrumbs: React.FC<Props> = (props) => {
    const breadcrumbs = useBreadcrumbs();
    const { accessiblePages } = props;
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

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
