import { NewRuleAlias } from '@models/reducer/RuleReducer';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Chapters from '@shared/RuleEdit/Chapters/Chapters';
import React, { ReactNode, useMemo } from 'react';
import Settings from '@components/Shared/RuleEdit/Settings/Settings';

interface Props {
    children: ReactNode
}
const NewRule: React.FC<Props> = (props) => {
    console.info('NewRule');
    const gameName = useTypedSelector((state) => state.RuleReducer[NewRuleAlias].name);
    const { username } = useTypedSelector((state) => state.personalDataReducer);

    const { children } = props;
    const components = useMemo((): JSX.Element => (
        <Chapters ruleUid={NewRuleAlias} />
    ), []);

    return (
        <>
            {children}
            <div>
                <Settings ruleUid={NewRuleAlias} gameName={gameName} username={username} />
                {components}
            </div>
        </>
    );
};

export default NewRule;
