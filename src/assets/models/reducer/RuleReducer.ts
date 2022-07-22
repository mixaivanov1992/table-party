export interface RuleState {
    [key: string]: {
        author: string,
        name: string,
        language: string,
        isPrivate: boolean,
        rating: number,
        version: Version,
    }
}

export enum Version {
    V0_0_1 = 'V0_0_1'
}
export const NewRuleAlias = 'NewRule';
export enum RuleActionType {
    SET_GAME_NAME = 'SET_GAME_NAME',
}

export interface SetGameName {
    type: RuleActionType.SET_GAME_NAME,
    name: string,
    uid: string
}

export type RuleAction = SetGameName;
