import { newRuleState, newRuleActionType, SetGameName, NewRuleAction, SetRowCount } from '@interfaces-types/newRuleReducer';

const initialState: newRuleState = {
    rowCount: 0,
    gameName: '',
}

export const newRuleReducer = (state = initialState, action: NewRuleAction): newRuleState => {
    //console.log(action, action.isAuthorized);
    switch (action.type){
        case newRuleActionType.SET_GAME_NAME:
            return {
                ...state,
                gameName: action.gameName
            };
        case newRuleActionType.SET_ROW_COUNT:
            console.log(action.rowCount);
            return {
                ...state,
                rowCount: action.rowCount
            };
        default:
            return state;
    }
}

export const setGameName = (gameName: string): SetGameName => {
    return {
        type: newRuleActionType.SET_GAME_NAME,
        gameName: gameName
    }
}

export const setRowCount = (rowCount: number): SetRowCount => {
    return {
        type: newRuleActionType.SET_ROW_COUNT,
        rowCount: rowCount
    }
}