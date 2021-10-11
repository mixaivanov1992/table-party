import React from 'react';
import styles from '@css/MyRules.module.scss';
import { IoMdImages } from 'react-icons/io';
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Path } from '@src/assets/interfaces-types/path';

const MyRules: React.FC = () => {
    return (
        <div className={styles.my_rules}>
            <div className={styles.add}>
                <Link to={`/${Path.newRule}`}>
                    <IoAddCircleOutline className={styles.icon} title="Создать новое правило"/>
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.logo}>
                        <IoMdImages className={styles.no_image} />
                    </div>
                    <div className={styles.name}>
                        Ярость Дракулы
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyRules;