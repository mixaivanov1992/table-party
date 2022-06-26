import { AccessiblePages } from '@models/accessiblePage';
import { Language } from '@models/language';
import { Link } from 'react-router-dom';
import { actionHandler } from '@store/actions/actionHandler';
import { logoutAction } from '@store/actions/authAction';
import { setLanguage } from '@store/reducer/mainSettingsReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/components/header';
import React from 'react';
import styles from '@css/header/Header.module.scss';

interface Props {
    accessiblePages: AccessiblePages
}

const Header: React.FC<Props> = (props) => {
    console.info('Header');
    const dispatch = useDispatch();

    const { isAuthorized } = useTypedSelector((state) => state.personalDataReducer);
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { accessiblePages } = props;

    const option = Object.keys(Language).map((item) => <option key={uuidv4()} value={item}>{item.toUpperCase()}</option>);

    const onChangeSetLanguage = (item: string): void => {
        dispatch(setLanguage(item));
    };

    const onClickLogout = ():void => {
        actionHandler(dispatch, language, logoutAction);
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
                    <div>
                        {accessiblePages.map((accessiblePage) => {
                            const {
                                pageRoute, pageRedirect, pageAlias, linkIcon,
                            } = accessiblePage;
                            const route = pageRedirect || pageRoute;
                            const Icon = linkIcon;

                            return (
                                <Link key={uuidv4()} className={styles[pageAlias]} to={route}>
                                    {Icon ? <Icon /> : ''}
                                </Link>
                            );
                        })}
                    </div>
                    {isAuthorized ? (
                        <span
                            role="button"
                            tabIndex={-1}
                            onKeyPress={() => {}}
                            onClick={onClickLogout}
                            className={styles.logout}
                        >
                            {Localization.logout}

                        </span>
                    ) : <span>{Localization.guest}</span>}
                </div>
            </div>
        </header>
    );
};

export default Header;
