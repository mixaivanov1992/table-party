export interface ChapterState{
    chapters: Array<{
        uid: string,
        sheetCount: number,
        name: string
        sheets: Array<{
            uid: string,
            content: string
            cover: string
        }>
    }>
}

export enum ChapterActionType{
    SET_COLUMN_COUNT = 'SET_COLUMN_COUNT',
    ADD_CHAPTER = 'ADD_CHAPTER',
    REMOVE_CHAPTER = 'REMOVE_CHAPTER',
    SET_CHAPTER_NAME = 'SET_CHAPTER_NAME',
    DELETE_CHAPTERS = 'DELETE_CHAPTERS',
    SET_SHEET_CONTENT = 'SET_SHEET_CONTENT',
    SET_SHEET_COVER = 'SET_SHEET_COVER',
}

export interface SetSheetCount{
    type: ChapterActionType.SET_COLUMN_COUNT,
    uid: string,
    count: number
}
export interface SetChapterName{
    type: ChapterActionType.SET_CHAPTER_NAME,
    uid: string,
    name: string
}

export interface AddChapter{
    type: ChapterActionType.ADD_CHAPTER,
    chapterCount: number,
    sheetCount: number
}

export interface RemoveChapter{
    type: ChapterActionType.REMOVE_CHAPTER,
    uid: string
}

export interface DeleteChapters{
    type: ChapterActionType.DELETE_CHAPTERS
}

export interface SetSheetContent{
    type: ChapterActionType.SET_SHEET_CONTENT,
    chapterUid: string,
    sheetUid: string,
    content: string
}
export interface SetSheetCover{
    type: ChapterActionType.SET_SHEET_COVER,
    chapterUid: string,
    sheetUid: string,
    cover: string
}

export type ChapterAction = SetSheetCount | AddChapter | RemoveChapter | SetChapterName | DeleteChapters | SetSheetContent | SetSheetCover;
