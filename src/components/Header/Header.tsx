import { AccessiblePages } from '@interfaces-types/accessiblePage';
import { Language } from '@src/assets/interfaces-types/language';
import { Link } from 'react-router-dom';
import { setLanguage } from '@src/store/reducer/mainSettingsReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/header';
import React from 'react';
import styles from '@css/header/Header.module.scss';

interface Props {
    accessiblePages: AccessiblePages
}

const Header: React.FC<Props> = (props) => {
    console.info('Header');
    const dispatch = useDispatch();
    // const localStorageLanguage = localStorage.getItem('language');
    // localStorageLanguage !== null ? JSON.parse(localStorageLanguage) : true

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { accessiblePages } = props;

    const option = Object.keys(Language).map((item) => <option key={uuidv4()} value={item}>{item.toUpperCase()}</option>);

    const onChangeSetLanguage = (item: string): void => {
        dispatch(setLanguage(item));
    };

    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <input type="search" placeholder={Localization.searchRules} />
            </div>
            <div>
                <select value={language} onChange={(event) => onChangeSetLanguage(event.currentTarget.value)} className={styles.language}>
                    {option}
                </select>
                <div className={styles.user_menu}>
                    {accessiblePages.map((accessiblePage) => {
                        const {
                            pageRoute, pageRedirect, pageAlias, linkIcon,
                        } = accessiblePage;
                        const route = pageRedirect || pageRoute;
                        const Icon = linkIcon;

                        return (
                            <Link key={uuidv4()} className={styles[pageAlias]} to={route}>
                                <Icon />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;
