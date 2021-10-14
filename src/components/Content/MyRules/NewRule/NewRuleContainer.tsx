import React, { useState } from 'react';
import NewRule from './NewRule'
import { useTypedSelector } from '@hooks/useTypedSelector';
import { setGameName, setRowCount } from '@store/reducer/newRuleReducer';
import { useDispatch } from 'react-redux';


const NewRuleContainer: React.FC = () => {
    const {gameName, rowCount} = useTypedSelector(state => state.newRule);
    const dispatch = useDispatch();
    const [rowCountLocal, setRowCountLocal] = useState(rowCount?rowCount:1);

    const clickRowAdd = (): void => {
        dispatch(setRowCount(rowCountLocal));
    }
    
    const inputRowCount = (rowCountLocal): void => {
        setRowCountLocal(rowCountLocal);
    }
    
    const changeGameName = (gameName): void => {
        dispatch(setGameName(gameName));
    }
    
    return (
        <NewRule
            clickRowAdd={clickRowAdd}
            inputRowCount={inputRowCount}
            changeGameName={changeGameName}
            rowCountLocal={rowCountLocal}
            rowCount={rowCount}
            gameName={gameName}
        />
    );
}

export default NewRuleContainer;