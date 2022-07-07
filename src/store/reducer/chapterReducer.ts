import {
    AddChapter,
    ChapterAction,
    ChapterActionType,
    ChapterState,
    DeleteChapters,
    RemoveChapter,
    SetChapterName,
} from '@models/reducer/chapterReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState: ChapterState = {
    0: [{
        uid: '',
        name: '',
    }],
};

export const chapterReducer = (state = initialState, action: ChapterAction): ChapterState => {
    switch (action.type) {
    case ChapterActionType.ADD_CHAPTER: {
        const { rule, count } = action;
        const newState = { ...state };

        if (!newState[rule]) {
            newState[rule] = [];
        }

        [...Array(count)].forEach(() => {
            newState[rule].push({
                uid: uuidv4(),
                name: '',
            });
        });
        return newState;
    }
    case ChapterActionType.REMOVE_CHAPTER: {
        const { rule, uid } = action;
        const newState = { ...state };
        newState[rule] = newState[rule].filter((chapter) => chapter.uid !== uid);
        return newState;
    }
    case ChapterActionType.SET_CHAPTER_NAME: {
        const { rule, uid, name } = action;
        const chapters = [...state[rule]];

        for (const index in chapters) {
            if (chapters[index].uid === uid) {
                chapters[index].name = name;
                break;
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

export const setChapterName = (rule: string, uid: string, name: string): SetChapterName => ({
    type: ChapterActionType.SET_CHAPTER_NAME,
    rule,
    uid,
    name,
});

export const addChapter = (rule: string, count: number): AddChapter => ({
    type: ChapterActionType.ADD_CHAPTER,
    rule,
    count,
});

export const removeChapter = (rule: string, uid: string): RemoveChapter => ({
    type: ChapterActionType.REMOVE_CHAPTER,
    rule,
    uid,
});

export const deleteChapters = (): DeleteChapters => ({
    type: ChapterActionType.DELETE_CHAPTERS,
});
