import { IoMdImages } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { PageRoute } from '@models/accessiblePage';
import { v4 as uuidv4 } from 'uuid';
import React, { ReactNode } from 'react';
import styles from '@css/content/profile/myRules/MyRules.module.scss';

interface Props {
    children: ReactNode
}

const MyRules: React.FC<Props> = (props) => {
    console.info('MyRules');
    const { children } = props;

    const myRulesState = [{
        name: '',
        image: '',
    }];

    const rules = myRulesState.map((rule) => {
        const { name, image } = rule;
        const cover = image ? <img src={image} alt={name} /> : <IoMdImages />;
        const baseUrl = PageRoute.ruleEdit.split(':')[0];
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
                    <Link to={{ pathname: `${baseUrl}123`, state: { children: { children } } }}><button type="button">Редактировать</button></Link>
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
