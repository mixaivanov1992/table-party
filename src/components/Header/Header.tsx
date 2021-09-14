import React from 'react';
import styles from '@css/Header.module.css';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    return (
        <div className={styles.color}>
            <div>
                <input placeholder="Поиск"/>
            </div>
            <div></div>
            <div>
                <button>Вход</button>
            </div>
        </div>
    );
}

export default Header;