import React from 'react';
import styles from '@css/Rules.module.scss';
import { IoMdImages } from 'react-icons/io';

const Rules: React.FC = () => {
    return (
        <div className={styles.rules}>
            <div>
                <div className={styles.logo}>
                    <IoMdImages className={styles.no_image} />
                </div>
                <div className={styles.name}>
                    Ярость Дракулы
                </div>
            </div>
        </div>
    );
}

export default Rules;