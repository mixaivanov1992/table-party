import React from 'react';
import NewRule from './NewRule'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { setGameName } from '@store/reducer/newRuleReducer';
//import { setCellCount } from '@src/store/reducer/rowReducer';


const NewRuleContainer: React.FC = () => {
    const {gameName} = useTypedSelector(state => state.newRuleReducer);
    const dispatch = useDispatch();
    
    const changeGameName = (gameName:string): void => {
        dispatch(setGameName(gameName));
    }
    
    return (
        <NewRule
            changeGameName={changeGameName}
            gameName={gameName}
        />
    );
}

export default NewRuleContainer;