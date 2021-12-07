import { NewRuleState, newRuleActionType, SetGameName, NewRuleAction } from '@interfaces-types/newRuleReducer';

const initialState: NewRuleState = {
    gameName: '',
}

export const newRuleReducer = (state = initialState, action: NewRuleAction): NewRuleState => {
    switch (action.type){
        case newRuleActionType.SET_GAME_NAME:
            return {
                ...state,
                gameName: action.gameName
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