import { AccessiblePages, PageRoute } from '@models/accessiblePage';
import { Link } from 'react-router-dom';
import { actionHandler } from '@store/actions/actionHandler';
import { logoutAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import DynamicIcon from '@shared/DynamicIcon/DynamicIcon';
import Localization from '@localization/components/header';
import React from 'react';
import styles from '@css/header/Header.module.scss';

interface Props {
    accessiblePages: AccessiblePages
}

const Header: React.FC<Props> = (props) => {
    console.info('Header');
    const dispatch = useDispatch();
    Localization.setLanguage(navigator.language);

    const { isAuthorized } = useTypedSelector((state) => state.personalDataReducer);
    const { accessiblePages } = props;

    const onClickLogout = ():void => {
        actionHandler(dispatch, logoutAction, {});
    };

    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <input type="search" placeholder={Localization.searchRules} />
            </div>
            <div>
                <div className={styles.user_menu}>
                    <div>
                        {accessiblePages.map((accessiblePage) => {
                            const {
                                pageRoute, pageAlias, linkIcon,
                            } = accessiblePage;

                            return (
                                <Link key={uuidv4()} className={styles[pageAlias]} to={pageRoute}>
                                    { linkIcon ? <DynamicIcon path={linkIcon.path} name={linkIcon.name} /> : '' }
                                </Link>
                            );
                        })}
                    </div>
                    {isAuthorized ? (
                        <Link to={PageRoute.home}>
                            <span
                                role="button"
                                tabIndex={-1}
                                onKeyPress={() => {}}
                                onClick={onClickLogout}
                                className={styles.logout}
                            >
                                {Localization.logout}

                            </span>
                        </Link>
                    ) : <span>{Localization.guest}</span>}
                </div>
            </div>
        </header>
    );
};

export default Header;
