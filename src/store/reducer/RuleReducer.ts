import {
    AddRule, DefaultRuleKey, RuleAction, RuleActionType, RuleState, SetGameName,
} from '@models/reducer/ruleReducer';
import { Rule, Version } from '@models/services/ruleService';

const versionIndex = Object.keys(Version);
const version:Version = Version[versionIndex[versionIndex.length - 1] as Version];

const initialState: RuleState = {
    [DefaultRuleKey]: {
        author: '',
        name: '',
        pageId: 0,
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
    case RuleActionType.ADD_RULE: {
        const { rule } = action;
        return { ...state, ...rule };
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

export const addRule = (rule: Rule): AddRule => ({
    type: RuleActionType.ADD_RULE,
    rule,
});
