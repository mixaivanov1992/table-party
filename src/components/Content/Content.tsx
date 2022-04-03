import React from 'react';
import styles from '@css/content/Content.module.scss';
import Localization from '@localization/content';
import {
    GiRollingDices, GiPerspectiveDiceSixFacesFive, GiRollingDiceCup, GiDiceEightFacesEight, GiDiceFire,
} from 'react-icons/gi';
import MyRulesContainer from '@components/Content/MyRules/MyRulesContainer';
import HomeContainer from '@components/Content/Home/HomeContainer';
import AboutContainer from '@components/Content/About/AboutContainer';
import RulesContainer from '@components/Content/Rules/RulesContainer';
import NewRuleContainer from '@components/Content/NewRule/NewRuleContainer';
import { PageData } from '@src/assets/interfaces-types/personalDataReducer';

interface Props {
    pageData: PageData
}
const Content: React.FC<Props> = (props) => {
    const { pageData } = props;

    console.debug('Header', `page-${pageData.name}`);
    const component = {
        home: HomeContainer,
        about: AboutContainer,
        rules: RulesContainer,
        newRule: NewRuleContainer,
        myRules: MyRulesContainer,
    };
    const Component = component[pageData.name];

    const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);
    const dice = [GiRollingDices, GiPerspectiveDiceSixFacesFive, GiRollingDiceCup, GiDiceEightFacesEight, GiDiceFire];
    const DiceComponent = dice[randomInt(0, 4)];

    return (
        <div className={styles.container}>
            <Component>
                {/* pageData={pageData} */}
                <div className={styles.header}>
                    <span>{Localization[pageData.name]}</span>
                    <DiceComponent />
                </div>
            </Component>
        </div>
    );
};

export default Content;
