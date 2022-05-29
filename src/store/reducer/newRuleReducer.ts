import {
    NewRuleState, newRuleActionType, SetGameName, NewRuleAction, Version,
} from '@interfaces-types/newRuleReducer';

const versionIndex = Object.keys(Version);
const version = Version[versionIndex[versionIndex.length - 1]];

const initialState: NewRuleState = {
    gameName: '',
    version,
};

export const newRuleReducer = (state = initialState, action: NewRuleAction): NewRuleState => {
    switch (action.type) {
    case newRuleActionType.SET_GAME_NAME:
        return {
            ...state,
            gameName: action.gameName,
        };
    default:
        return state;
    }
};

export const setGameName = (gameName: string): SetGameName => ({
    type: newRuleActionType.SET_GAME_NAME,
    gameName,
});
