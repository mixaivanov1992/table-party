import {
    AddChapter,
    ChapterAction,
    ChapterActionType,
    ChapterState,
    DeleteChapters,
    RemoveChapter,
    SetChapterName,
} from '@models/reducer/chapterReducer';
import { Chapters } from '@models/services/ruleService';
import { DefaultRuleKey } from '@models/reducer/ruleReducer';

const initialState: ChapterState = {
    [DefaultRuleKey]: [{
        uid: '',
        name: '',
    }],
};

export const chapterReducer = (state = initialState, action: ChapterAction): ChapterState => {
    switch (action.type) {
    case ChapterActionType.ADD_CHAPTERS: {
        const { chapters } = action;
        const newState = { ...state };
        for (const index in chapters) {
            if (Object.hasOwnProperty.call(newState, index)) {
                newState[index].push(...chapters[index]);
            } else {
                newState[index] = chapters[index];
            }
        }
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
    case ChapterActionType.DELETE_CHAPTERS: {
        const { rule } = action;
        const newState = { ...state };
        delete newState[rule];
        return newState;
    }
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

export const addChapter = (chapters: Chapters): AddChapter => ({
    type: ChapterActionType.ADD_CHAPTERS,
    chapters,
});

export const removeChapter = (rule: string, uid: string): RemoveChapter => ({
    type: ChapterActionType.REMOVE_CHAPTER,
    rule,
    uid,
});

export const deleteChapters = (rule: string): DeleteChapters => ({
    type: ChapterActionType.DELETE_CHAPTERS,
    rule,
});
