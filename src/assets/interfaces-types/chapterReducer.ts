export interface ChapterState{
    chapters: Array<{
        index: string,
        sheetCount: number,
    }>
}

export enum ChapterActionType{
    SET_COLUMN_COUNT = 'SET_COLUMN_COUNT',
    ADD_CHAPTER = 'ADD_CHAPTER',
    REMOVE_CHAPTER = 'REMOVE_CHAPTER'
}

export interface SetSheetCount{
    type: ChapterActionType.SET_COLUMN_COUNT,
    index: string,
    count: number
}

export interface AddChapter{
    type: ChapterActionType.ADD_CHAPTER,
    count: number
}

export interface RemoveChapter{
    type: ChapterActionType.REMOVE_CHAPTER,
    index: string
}

export type ChapterAction = SetSheetCount | AddChapter | RemoveChapter;
