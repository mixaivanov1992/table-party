import React from 'react';
import styles from '@css/navBar/NavBar.module.scss';
import Localization from '@localization/navBar';
import { Link, useLocation } from "react-router-dom";
import { IoArrowUndoCircleSharp } from 'react-icons/io5';
import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';

interface Props {
    onClickToggle(): void,
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const NavBar: React.FC<Props> = (props) => {
    console.debug('NavBar');
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    {
                        Object.keys(props.accessiblePages).map((pageName) => {
                            const location = useLocation();
                            let styleName = '';
                            if (location.pathname == props.accessiblePages[pageName].path || location.pathname == props.accessiblePages[pageName].redirect) {
                                styleName = styles.active;
                            }
                            return (
                                <li key={pageName} className={styleName}>
                                    <Link to={props.accessiblePages[pageName].path}>{Localization[pageName]}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
            {<div onClick={props.onClickToggle} className={styles.toggle}><IoArrowUndoCircleSharp /></div>}
        </div>
    );
}

export default NavBar;