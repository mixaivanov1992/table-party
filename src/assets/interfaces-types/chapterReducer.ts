export interface ChapterState{
    chapters: Array<{
        index: string,
        columnCount: number,
    }>
}

export enum ChapterActionType{
    SET_COLUMN_COUNT = 'SET_COLUMN_COUNT',
    ADD_CHAPTER = 'ADD_CHAPTER',
    REMOVE_CHAPTER = 'REMOVE_CHAPTER'
}

export interface SetColumnCount{
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

export type ChapterAction = SetColumnCount | AddChapter | RemoveChapter;
