import React from 'react';
import styles from '@css/navBar/NavBar.module.scss';
import Localization from '@localization/navBar';
import { Link, useLocation } from 'react-router-dom';
import { IoArrowUndoCircleSharp } from 'react-icons/io5';
import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';

interface Props {
    onClickToggle(): void,
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const NavBar: React.FC<Props> = (props) => {
    console.debug('NavBar');

    const { accessiblePages, onClickToggle } = props;
    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    Object.keys(accessiblePages).map((pageName) => {
                        const location = useLocation();
                        let styleName = '';
                        if (location.pathname === accessiblePages[pageName].path || location.pathname === accessiblePages[pageName].redirect) {
                            styleName = styles.active;
                        }
                        return (
                            <li key={pageName} className={styleName}>
                                <Link to={accessiblePages[pageName].path}>{Localization[pageName]}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <div
                tabIndex={0}
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
