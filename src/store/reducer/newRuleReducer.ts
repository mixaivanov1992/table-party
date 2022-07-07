import {
    NewRuleAction, NewRuleState, SetGameName, Version, newRuleActionType,
} from '@models/reducer/newRuleReducer';
import { v4 as uuidv4 } from 'uuid';

const versionIndex = Object.keys(Version);
const version:Version = Version[versionIndex[versionIndex.length - 1] as Version];

const initialState: NewRuleState = {
    uid: uuidv4(),
    name: '',
    version,
};

export const newRuleReducer = (state = initialState, action: NewRuleAction): NewRuleState => {
    switch (action.type) {
    case newRuleActionType.SET_GAME_NAME:
        return {
            ...state,
            name: action.name,
        };
    default:
        return state;
    }
};

export const setGameName = (name: string): SetGameName => ({
    type: newRuleActionType.SET_GAME_NAME,
    name,
});
