import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { setGameName } from '@store/reducer/newRuleReducer';
import NewRule from './NewRule';

interface Props {
    children: ReactNode
}
const NewRuleContainer: React.FC<Props> = (props) => {
    const { gameName } = useTypedSelector((state) => state.newRuleReducer);
    const dispatch = useDispatch();

    const changeGameName = (gameName: string): void => {
        dispatch(setGameName(gameName));
    };
    const children = { props };
    return (
        <>
            {props.children}
            <NewRule
                changeGameName={changeGameName}
                gameName={gameName}
            />
        </>
    );
};

export default NewRuleContainer;
