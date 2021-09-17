import React from 'react';
import styles from '@css/Header.module.scss';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.search}>
                <input placeholder="Поиск"/>
            </div>
            <div className={styles.login}>
                <button>Вход</button>
            </div>
        </div>
    );
}

export default Header;