import React from 'react';
import styles from '@css/NavBar.module.scss';
import Localization from '@localization/navBar';
import { Link, useLocation } from "react-router-dom";
import { IoArrowRedoCircleSharp, IoHome, IoDiceSharp } from 'react-icons/io5';
import { ImUsers, ImBook } from "react-icons/im";
import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';
import { GiRuleBook } from "react-icons/gi";

interface Props {
    onClickToggle(): void,
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const MinNavBar: React.FC<Props> = (props) => {
    console.debug('MinNavBar');
    return (
        <div className={styles.min_navbar}>
            <nav>
                <ul>
                    {
                        Object.keys(props.accessiblePages).map((pageName) => {
                            const linkContent = {
                                home: IoHome,
                                about: ImUsers,
                                rules: IoDiceSharp,
                                newRule: GiRuleBook,
                                myRules: ImBook,
                            }
                            const Icon = linkContent[pageName];
                            const location = useLocation();
                            let styleName = '';
                            if (location.pathname == props.accessiblePages[pageName].path || location.pathname == props.accessiblePages[pageName].redirect) {
                                styleName = styles.active;
                            }
                            return (
                                <li key={pageName} className={styleName}>
                                    <Link data-localization={Localization[pageName]} to={props.accessiblePages[pageName].path}>{<Icon />}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
            {<div onClick={props.onClickToggle} className={styles.toggle}><IoArrowRedoCircleSharp /></div>}
        </div>
    );
}
export default MinNavBar;