import React, { ReactNode } from 'react';
import NewRule from './NewRule'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { setGameName } from '@store/reducer/newRuleReducer';


interface Props {
    children: ReactNode
}
const NewRuleContainer: React.FC<Props> = (props) => {
    const { gameName } = useTypedSelector(state => state.newRuleReducer);
    const dispatch = useDispatch();

    const changeGameName = (gameName: string): void => {
        dispatch(setGameName(gameName));
    }

    return (
        <>
            {props.children}
            <NewRule
                changeGameName={changeGameName}
                gameName={gameName}
            />
        </>
    );
}

export default NewRuleContainer;