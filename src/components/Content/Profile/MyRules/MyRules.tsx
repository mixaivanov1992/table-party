import { IoMdImages } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import styles from '@css/content/profile/myRules/MyRules.module.scss';

const MyRules: React.FC = () => {
    console.info('MyRules');

    const myRulesState = [{
        name: '',
        image: '',
    }];

    const rules = myRulesState.map((rule) => {
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
                <div className={styles.menu}>
                    <button type="button">Играть</button>
                    <button type="button">Редактировать</button>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className={styles.my_rules}>{rules}</div>
        </div>
    );
};

export default MyRules;
