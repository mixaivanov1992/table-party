import React from 'react';
import styles from '@css/Header.module.scss';
import { Link } from "react-router-dom";
import { IoPersonCircle } from 'react-icons/io5';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    console.debug('Header');
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.search}>
                    <input placeholder="Поиск"/>
                </div>
                <div className={styles.user_menu}>
                    <Link className={styles.login} to="/login">
                        <IoPersonCircle size={40} color={'#24292f'}/>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;