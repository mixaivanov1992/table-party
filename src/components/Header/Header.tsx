import React from 'react';
import styles from '@css/Header.module.scss';
import { IoPersonCircle } from 'react-icons/io5';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.search}>
                <input placeholder="Поиск"/>
            </div>
            <div className={styles.user_menu}>
                <span className={styles.login}><IoPersonCircle size={40} color={'#000'}/></span>
            </div>
        </div>
    );
}

export default Header;