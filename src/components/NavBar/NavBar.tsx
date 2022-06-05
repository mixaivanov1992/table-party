import { AccessiblePages } from '@interfaces-types/accessiblePage';
import { IoArrowUndoCircleSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { UseLocation } from '@src/assets/interfaces-types/typeReactRouterDom';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/navBar';
import React from 'react';
import styles from '@css/navBar/NavBar.module.scss';

interface Props {
    onClickToggle(): void,
    accessiblePages: AccessiblePages
}

const NavBar: React.FC<Props> = (props) => {
    console.info('NavBar');
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { accessiblePages, onClickToggle } = props;
    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    accessiblePages.map((accessiblePage) => {
                        const { pageRoute, pageRedirect, pageAlias } = accessiblePage;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const location = useLocation<UseLocation>();

                        if (location.pathname === pageRoute || (pageRedirect && location.pathname === pageRedirect)) {
                            return (
                                <li key={uuidv4()} className={styles.active}>
                                    <Link to={pageRoute}>{Localization[pageAlias]}</Link>
                                </li>
                            );
                        }
                        return (
                            <li key={uuidv4()}>
                                <Link to={pageRoute}>{Localization[pageAlias]}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <div
                tabIndex={-1}
                onKeyPress={() => {}}
                role="button"
                onClick={onClickToggle}
                className={styles.toggle}
            >
                <IoArrowUndoCircleSharp />
            </div>
        </nav>
    );
};

export default NavBar;
