import { useTypedSelector } from '@hooks/useTypedSelector';
import Chapters from '@components/Content/NewRule/Chapters/Chapters';
import React, { ReactNode, useMemo } from 'react';
import Settings from '@components/Content/NewRule/Settings/Settings';

interface Props {
    children: ReactNode
}
const NewRule: React.FC<Props> = (props) => {
    console.info('NewRule');
    const { name: gameName, uid: ruleUid } = useTypedSelector((state) => state.newRuleReducer);
    const { username } = useTypedSelector((state) => state.personalDataReducer);

    const { children } = props;
    const components = useMemo((): JSX.Element => (
        <Chapters ruleUid={ruleUid} />
    ), [ruleUid]);
    return (
        <>
            {children}
            <div>
                <Settings ruleUid={ruleUid} gameName={gameName} username={username} />
                {components}
            </div>
        </>
    );
};

export default NewRule;
