import { AccessiblePages } from '@src/assets/interfaces-types/accessiblePage';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/footer';
import React from 'react';
import styles from '@css/footer/Footer.module.scss';

interface Props {
    accessiblePages: AccessiblePages
}

const Footer: React.FC<Props> = (props) => {
    console.info('Footer');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { accessiblePages } = props;

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.site_name}>Table Party</div>
                <div className={styles.links}>
                    {accessiblePages.map((accessiblePage) => {
                        const {
                            pageRoute, pageRedirect, pageAlias,
                        } = accessiblePage;
                        const route = pageRedirect || pageRoute;

                        return (
                            <Link key={uuidv4()} className={styles[pageAlias]} to={route}>{Localization[pageAlias]}</Link>
                        );
                    })}
                </div>
                <p className={styles.copyright}>
                    &copy;
                    {` ${new Date().getFullYear()} TP.COM`}
                </p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <span>Table</span>
                    <span>Party</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
