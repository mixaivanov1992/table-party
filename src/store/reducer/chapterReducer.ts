import {
    ChapterState, ChapterActionType, SetSheetCount, SetChapterName, AddChapter, ChapterAction, RemoveChapter, DeleteChapters, SetSheetContent,
} from '@src/assets/interfaces-types/chapterReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState: ChapterState = {
    chapters: [{
        uid: '',
        sheetCount: 0,
        name: '',
        sheets: [{
            uid: '',
            content: '',
        }],
    }],
};

export const chapterReducer = (state = initialState, action: ChapterAction): ChapterState => {
    switch (action.type) {
    case ChapterActionType.SET_COLUMN_COUNT: {
        const chapters = [...state.chapters];
        chapters.forEach((chapter, index) => { // заменить на for
            if (chapter.uid === action.uid) {
                if (chapter.sheetCount > action.count) {
                    chapters[index].sheets = chapters[index].sheets.slice(0, action.count);
                } else if (chapter.sheetCount < action.count) {
                    const sheets = [...Array(action.count - chapter.sheetCount)].map(() => ({
                        uid: uuidv4(),
                        content: '',
                    }));
                    chapters[index].sheets = chapters[index].sheets.concat(sheets);
                }
                chapters[index].sheetCount = action.count;
            }
        });
        return { ...state, chapters };
    }
    case ChapterActionType.ADD_CHAPTER: {
        const chapters = [...state.chapters];

        [...Array(action.chapterCount)].forEach(() => {
            const sheets = [...Array(action.sheetCount)].map(() => ({
                uid: uuidv4(),
                content: '',
            }));

            chapters.push({
                uid: uuidv4(),
                sheetCount: action.sheetCount,
                name: '',
                sheets,
            });
        });
        return { ...state, chapters };
    }
    case ChapterActionType.REMOVE_CHAPTER: {
        const chapters = state.chapters.filter((chapter) => chapter.uid !== action.uid);
        return { ...state, chapters };
    }
    case ChapterActionType.SET_CHAPTER_NAME: {
        const chapters = [...state.chapters];
        chapters.forEach((chapter, index) => { // заменить на for
            if (chapter.uid === action.uid) {
                chapters[index].name = action.name;
            }
        });
        return { ...state, chapters };
    }
    case ChapterActionType.SET_SHEET_CONTENT: {
        const chapters = [...state.chapters];
        const chapter = chapters.filter((item) => item.uid === action.chapterUid);
        for (const chapterItem of chapter) {
            const sheet = chapterItem.sheets.filter((item) => item.uid === action.sheetUid);
            for (const sheetItem of sheet) {
                sheetItem.content = action.content;
            }
        }
        return { ...state, chapters };
    }
    case ChapterActionType.DELETE_CHAPTERS:
        return initialState;
    default:
        return state;
    }
};

export const setSheetCount = (uid: string, count: number): SetSheetCount => ({
    type: ChapterActionType.SET_COLUMN_COUNT,
    uid,
    count,
});

export const setChapterName = (uid: string, name: string): SetChapterName => ({
    type: ChapterActionType.SET_CHAPTER_NAME,
    uid,
    name,
});

export const addChapter = (chapterCount: number, sheetCount: number): AddChapter => ({
    type: ChapterActionType.ADD_CHAPTER,
    chapterCount,
    sheetCount,
});

export const removeChapter = (uid: string): RemoveChapter => ({
    type: ChapterActionType.REMOVE_CHAPTER,
    uid,
});

export const deleteChapters = (): DeleteChapters => ({
    type: ChapterActionType.DELETE_CHAPTERS,
});

export const setSheetContent = (chapterUid: string, sheetUid: string, content: string): SetSheetContent => ({
    type: ChapterActionType.SET_SHEET_CONTENT,
    chapterUid,
    sheetUid,
    content,
});
