import { IoMdImages } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import React, { ReactNode } from 'react';
import styles from '@css/content/rules/Rules.module.scss';

interface Props {
    children: ReactNode
}
const Rules: React.FC<Props> = (props) => {
    console.info('Rules');

    const { children } = props;
    const rulesState = [{
        name: '',
        image: '',
    }];

    const rules = rulesState.map((rule) => {
        const { name, image } = rule;
        const cover = image ? <img src={image} alt={name} /> : <IoMdImages />;
        return (
            <div key={uuidv4()} className={styles.rule}>
                <div className={styles.logo}>
                    {cover}
                </div>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
        );
    });

    return (
        <>
            {children}
            <div>
                <div className={styles.rules}>{rules}</div>
            </div>
        </>
    );
};

export default Rules;
