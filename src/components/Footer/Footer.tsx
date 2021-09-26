import React from 'react';
import styles from '@css/Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <footer className={styles.footer}>Footer</footer>
        </div>
    );
}

export default Footer;