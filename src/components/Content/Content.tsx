import { AccessiblePage } from '@interfaces-types/accessiblePage';
import {
    GiDiceEightFacesEight, GiDiceFire, GiPerspectiveDiceSixFacesFive, GiRollingDiceCup, GiRollingDices,
} from 'react-icons/gi';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import Localization from '@localization/content';
import React from 'react';
import styles from '@css/content/Content.module.scss';

interface Props {
    accessiblePage: AccessiblePage
}
const Content: React.FC<Props> = (props) => {
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { accessiblePage } = props;
    const { pageAlias, componentName } = accessiblePage;

    console.info('Content', `page-${pageAlias}`);

    const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);
    const dice = [GiRollingDices, GiPerspectiveDiceSixFacesFive, GiRollingDiceCup, GiDiceEightFacesEight, GiDiceFire];
    const DiceComponent = dice[randomInt(0, 4)];

    const Component = require(`./${componentName}/${componentName}`).default;
    return (
        <div className={styles.content}>
            <Component>
                <div className={styles.header}>
                    <span>{Localization[pageAlias]}</span>
                    <DiceComponent />
                </div>
            </Component>
        </div>
    );
};

export default Content;
