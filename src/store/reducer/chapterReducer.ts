import {
    AddChapter,
    ChapterAction,
    ChapterActionType,
    ChapterState,
    DeleteChapters,
    RemoveChapter,
    SetChapterName,
    SetSheetContent,
    SetSheetCount,
    SetSheetCover,
} from '@models/reducer/chapterReducer';
import { v4 as uuidv4 } from 'uuid';

function setSheetContentOrCover(state: ChapterState, action: SetSheetContent | SetSheetCover, itemKey: string): ChapterState {
    const chapters = [...state.chapters];
    const { chapterUid, sheetUid } = action;
    const chapter = chapters.filter((item) => item.uid === chapterUid);
    for (const chapterItem of chapter) {
        const sheet = chapterItem.sheets.filter((item) => item.uid === sheetUid);
        for (const sheetItem of sheet) {
            sheetItem[itemKey] = action[itemKey];
        }
    }
    return { ...state, chapters };
}

const initialState: ChapterState = {
    chapters: [{
        uid: '',
        sheetCount: 0,
        name: '',
        sheets: [{
            uid: '',
            content: '',
            cover: '',
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
                        cover: '',
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
                cover: '',
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
        return setSheetContentOrCover(state, action, 'content');
    }
    case ChapterActionType.SET_SHEET_COVER: {
        return setSheetContentOrCover(state, action, 'cover');
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

export const setSheetCover = (chapterUid: string, sheetUid: string, cover: string): SetSheetCover => ({
    type: ChapterActionType.SET_SHEET_COVER,
    chapterUid,
    sheetUid,
    cover,
});
