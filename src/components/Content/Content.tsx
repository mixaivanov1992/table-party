import React from 'react';
import styles from '@css/content/Content.module.scss';
import Localization from '@localization/content';
import {
    GiRollingDices, GiPerspectiveDiceSixFacesFive, GiRollingDiceCup, GiDiceEightFacesEight, GiDiceFire,
} from 'react-icons/gi';
import { PageData } from '@src/assets/interfaces-types/personalDataReducer';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';

interface Props {
    pageData: PageData
}
const Content: React.FC<Props> = (props) => {
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { pageData } = props;

    console.debug('Content', `page-${pageData.alias}`);

    const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);
    const dice = [GiRollingDices, GiPerspectiveDiceSixFacesFive, GiRollingDiceCup, GiDiceEightFacesEight, GiDiceFire];
    const DiceComponent = dice[randomInt(0, 4)];

    const Component = require(`./${pageData.component}/${pageData.component}`).default;
    return (
        <div className={styles.content}>
            <Component>
                <div className={styles.header}>
                    <span>{Localization[pageData.alias]}</span>
                    <DiceComponent />
                </div>
            </Component>
        </div>
    );
};

export default Content;
