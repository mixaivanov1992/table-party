import { IoMdImages } from 'react-icons/io';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import React, { ReactNode } from 'react';
import styles from '@css/content/myRules/MyRules.module.scss';

interface Props {
    children: ReactNode
}
const MyRules: React.FC<Props> = (props) => {
    console.info('MyRules');

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    // Localization.setLanguage(language);
    const { children } = props;

    const myRulesState = [{
        name: {
            ru: 'Ярость дракулы',
            en: 'Ярость дракулы en',
        },
        image: '',
    }, {
        name: {
            ru: 'Спартак',
            en: 'Спартак en',
        },
        image: '',
    }, {
        name: {
            ru: 'Мрачная гавань',
            en: 'Мрачная гавань en',
        },
        image: 'https://www.mirf.ru/wp-content/uploads/2019/07/Gloomhaven_Mrachnaya-gavan_1200h630.jpg',
    }, {
        name: {
            ru: 'Нечто',
            en: 'Нечто en',
        },
        image: '',
    }, {
        name: {
            ru: 'Пэчворк',
            en: 'Пэчворк en',
        },
        image: '',
    }, {
        name: {
            ru: 'Чужая планета',
            en: 'Чужая планета en',
        },
        image: '',
    }];

    const rules = myRulesState.map((rule) => {
        const { name, image } = rule;
        const cover = image ? <img src={image} alt={name[language]} /> : <IoMdImages />;
        return (
            <div key={uuidv4()} className={styles.rule}>
                <div className={styles.logo}>
                    {cover}
                </div>
                <div className={styles.name}>
                    {name[language]}
                </div>
                <div className={styles.menu}>
                    <button type="button">Играть</button>
                    <button type="button">Редактировать</button>
                </div>
            </div>
        );
    });

    return (
        <>
            {children}
            <div>
                <div className={styles.my_rules}>{rules}</div>
            </div>
        </>
    );
};

export default MyRules;
