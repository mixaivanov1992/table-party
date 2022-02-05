import React from 'react';
import styles from '@css/Header.module.scss';
import { Link } from "react-router-dom";
import { IoPersonCircle } from 'react-icons/io5';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    console.debug('Header');
    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <input type="text" placeholder="Поиск"/>
            </div>
            <div>
                <select className={styles.language}>
                    <option lang="ru" value="russian" selected>RU</option>
                    <option lang="en" value="english">EN</option>
                </select>
                <div className={styles.user_menu}>
                    <Link className={styles.login} to="/login">
                        <IoPersonCircle /><br />
                        <span>qqq</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);