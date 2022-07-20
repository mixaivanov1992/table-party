export interface SheetState{
    [key: string]: SheetData
}

export type SheetData = Array<{uid: string, content: string, cover: string}>;

export enum SheetActionType{
    SET_SHEET_CONTENT = 'SET_SHEET_CONTENT',
    SET_SHEET_COVER = 'SET_SHEET_COVER',
    ADD_SHEET = 'ADD_SHEET',
    DELETE_SHEET = 'DELETE_SHEET',
    DELETE_SHEETS = 'DELETE_SHEETS'
}

export interface AddSheet{
    type: SheetActionType.ADD_SHEET,
    chapter: string,
    count: number,
}

export interface DeleteSheets{
    type: SheetActionType.DELETE_SHEETS,
    chapters: string[],
}

export interface DeleteSheet{
    type: SheetActionType.DELETE_SHEET,
    chapter: string,
    uid: string,
}

export interface SetSheetContent{
    type: SheetActionType.SET_SHEET_CONTENT,
    chapter: string,
    uid: string,
    content: string
}
export interface SetSheetCover{
    type: SheetActionType.SET_SHEET_COVER,
    chapter: string,
    uid: string,
    cover: string
}

export type SheetAction = SetSheetContent | SetSheetCover | AddSheet | DeleteSheet | DeleteSheets;
