export interface ActiveSheetState{
    chapterUid: string,
    sheetUid: string,
    content: string
}

export enum ActiveSheetActionType{
    SET_ACTIVE_SHEET = 'SET_ACTIVE_SHEET',
}

export interface SetActiveSheet{
    type: ActiveSheetActionType.SET_ACTIVE_SHEET,
    chapterUid: string,
    sheetUid: string,
    content: string
}

export type ActiveSheetAction = SetActiveSheet;
