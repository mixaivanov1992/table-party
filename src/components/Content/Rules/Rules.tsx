import React, { ReactNode } from 'react';
import styles from '@css/content/rules/Rules.module.scss';
import { IoMdImages } from 'react-icons/io';

interface Props {
    children: ReactNode
}
const Rules: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            {children}
            <div className={styles.rules}>
                <div className={styles.list}>
                    <div className={styles.logo}>
                        <IoMdImages className={styles.no_image} />
                    </div>
                    <div className={styles.name}>
                        Ярость Дракулы
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rules;
