export interface newRuleState {
    rowCount: number,
    gameName: string,
}
export enum newRuleActionType {
    SET_GAME_NAME = 'SET_GAME_NAME',
    SET_ROW_COUNT = 'SET_ROW_COUNT',
}

export interface SetGameName {
    type: newRuleActionType.SET_GAME_NAME,
    gameName: string
}

export interface SetRowCount {
    type: newRuleActionType.SET_ROW_COUNT,
    rowCount: number
}

export type NewRuleAction = SetGameName | SetRowCount;

