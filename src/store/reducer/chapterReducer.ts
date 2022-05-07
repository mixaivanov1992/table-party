import {
    ChapterState, ChapterActionType, SetSheetCount, SetChapterName, AddChapter, ChapterAction, RemoveChapter, DeleteChapters,
} from '@src/assets/interfaces-types/chapterReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState: ChapterState = {
    chapters: [{
        uid: '',
        sheetCount: 0,
        name: '',
    }],
};

export const chapterReducer = (state = initialState, action: ChapterAction): ChapterState => {
    switch (action.type) {
    case ChapterActionType.SET_COLUMN_COUNT: {
        const chapters = [...state.chapters];
        chapters.forEach((chapter, index) => {
            if (chapter.uid === action.uid) {
                chapters[index].sheetCount = action.count;
            }
        });
        return { ...state, chapters };
    }
    case ChapterActionType.ADD_CHAPTER: {
        const chapters = [...state.chapters];
        [...Array(action.count)].forEach(() => {
            chapters.push({
                uid: uuidv4(),
                sheetCount: 3,
                name: '',
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
        chapters.forEach((chapter, index) => {
            if (chapter.uid === action.uid) {
                chapters[index].name = action.name;
            }
        });
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

export const addChapter = (count: number): AddChapter => ({
    type: ChapterActionType.ADD_CHAPTER,
    count,
});

export const removeChapter = (uid: string): RemoveChapter => ({
    type: ChapterActionType.REMOVE_CHAPTER,
    uid,
});

export const deleteChapters = (): DeleteChapters => ({
    type: ChapterActionType.DELETE_CHAPTERS,
});
