import {
    NewRuleAlias, RuleAction, RuleActionType, RuleState, SetGameName, Version,
} from '@models/reducer/RuleReducer';

const versionIndex = Object.keys(Version);
const version:Version = Version[versionIndex[versionIndex.length - 1] as Version];

const initialState: RuleState = {
    [NewRuleAlias]: {
        author: '',
        name: '',
        language: navigator.language,
        isPrivate: false,
        rating: 0,
        version,
    },
};

export const RuleReducer = (state = initialState, action: RuleAction): RuleState => {
    switch (action.type) {
    case RuleActionType.SET_GAME_NAME: {
        const { uid, name } = action;
        const newState = { ...state };
        newState[uid].name = name;
        return newState;
    }
    default:
        return state;
    }
};

export const setGameName = (uid: string, name: string): SetGameName => ({
    type: RuleActionType.SET_GAME_NAME,
    name,
    uid,
});
