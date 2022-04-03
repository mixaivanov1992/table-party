export interface NewRuleState {
    gameName: string,
}
export enum newRuleActionType {
    SET_GAME_NAME = 'SET_GAME_NAME',
}

export interface SetGameName {
    type: newRuleActionType.SET_GAME_NAME,
    gameName: string
}

export type NewRuleAction = SetGameName;
