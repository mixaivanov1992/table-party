import { ChapterData } from '@models/reducer/chapterReducer';
import { SheetData } from '@models/reducer/sheetReducer';
import { Version } from '@models/reducer/newRuleReducer';

export interface Rule{
    uid: string,
    username: string,
    name: string,
    language: string,
    isPrivate: boolean,
    rating: number,
    version: Version,
}

export interface Chapters{
    [key: string]: ChapterData
}

export interface Sheets{
    [key: string]: SheetData
}
