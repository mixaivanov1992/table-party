import { Rule } from '@models/services/ruleService';

export type RuleState = Rule;

export const DefaultRuleKey = 'DefaultRuleKey';
export enum RuleActionType {
    SET_GAME_NAME = 'SET_GAME_NAME',
    ADD_RULE = 'ADD_RULE',
    REMOVE_RULE = 'REMOVE_RULE'
}

export interface SetGameName {
    type: RuleActionType.SET_GAME_NAME,
    name: string,
    uid: string
}

export interface AddRule {
    type: RuleActionType.ADD_RULE,
    rule: Rule
}

export interface RemoveRule {
    type: RuleActionType.REMOVE_RULE,
    uid: string
}

export type RuleAction = SetGameName | AddRule | RemoveRule;
