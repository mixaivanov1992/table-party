import React from 'react';
import styles from '@css/navBar/NavBar.module.scss';
import Localization from '@localization/navBar';
import { Link, useLocation } from 'react-router-dom';
import { IoArrowRedoCircleSharp, IoHome, IoDiceSharp } from 'react-icons/io5';
import { ImUsers, ImBook } from 'react-icons/im';
import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';
import { GiRuleBook } from 'react-icons/gi';

interface Props {
    onClickToggle(): void,
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const MinNavBar: React.FC<Props> = (props) => {
    console.debug('MinNavBar');

    const { accessiblePages, onClickToggle } = props;
    return (
        <div className={styles.min_navbar}>
            <nav>
                <ul>
                    {
                        Object.keys(accessiblePages).map((pageName) => {
                            const linkContent = {
                                home: IoHome,
                                about: ImUsers,
                                rules: IoDiceSharp,
                                newRule: GiRuleBook,
                                myRules: ImBook,
                            };
                            const Icon = linkContent[pageName];
                            const location = useLocation();
                            let styleName = '';
                            if (location.pathname === accessiblePages[pageName].path || location.pathname === accessiblePages[pageName].redirect) {
                                styleName = styles.active;
                            }
                            return (
                                <li key={pageName} className={styleName}>
                                    <Link data-localization={Localization[pageName]} to={accessiblePages[pageName].path}><Icon /></Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
            <div role="button" tabIndex={0} onClick={onClickToggle} className={styles.toggle}><IoArrowRedoCircleSharp /></div>
        </div>
    );
};
export default MinNavBar;
