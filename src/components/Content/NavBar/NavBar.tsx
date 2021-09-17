import React from 'react';
import styles from '@css/NavBar.module.scss';

interface Props{}

const NavBar: React.FC<Props> = (props) => {
    return (
        <div className={styles.navbar}>
            <div>Список правил</div>
        </div>
    );
}

export default NavBar;