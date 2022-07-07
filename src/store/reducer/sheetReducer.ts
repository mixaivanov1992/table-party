import {
    AddSheet,
    DeleteSheet,
    SetSheetContent,
    SetSheetCover,
    SheetAction,
    SheetActionType,
    SheetState,
} from '@models/reducer/sheetReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState: SheetState = {
    0: [{
        uid: '',
        content: '',
        cover: '',
    }],
};

export const sheetReducer = (state = initialState, action: SheetAction): SheetState => {
    switch (action.type) {
    case SheetActionType.ADD_SHEET: {
        const { chapter, count } = action;
        const newState = { ...state };

        if (!newState[chapter]) {
            newState[chapter] = [];
        }
        [...Array(count)].forEach(() => {
            newState[chapter].push({
                uid: uuidv4(),
                content: '',
                cover: '',
            });
        });
        return newState;
    }
    case SheetActionType.SET_SHEET_CONTENT:
    case SheetActionType.SET_SHEET_COVER: {
        const { chapter, uid, type } = action;
        const sheets = state[chapter].filter((item) => item.uid === uid);
        for (const item of sheets) {
            if (SheetActionType.SET_SHEET_CONTENT === type) {
                item.content = action.content;
            } else {
                item.cover = action.cover;
            }
        }
        return { ...state, sheets };
    }
    case SheetActionType.DELETE_SHEET: {
        const { chapter, uid } = action;
        const newState = { ...state };
        newState[chapter] = newState[chapter].filter((item) => item.uid !== uid);
        return newState;
    }
    default:
        return state;
    }
};
export const addSheet = (chapter: string, count: number): AddSheet => ({
    type: SheetActionType.ADD_SHEET,
    chapter,
    count,
});

export const deleteSheet = (chapter: string, uid: string): DeleteSheet => ({
    type: SheetActionType.DELETE_SHEET,
    chapter,
    uid,
});

export const setSheetContent = (chapter: string, uid: string, content: string): SetSheetContent => ({
    type: SheetActionType.SET_SHEET_CONTENT,
    chapter,
    uid,
    content,
});

export const setSheetCover = (chapter: string, uid: string, cover: string): SetSheetCover => ({
    type: SheetActionType.SET_SHEET_COVER,
    chapter,
    uid,
    cover,
});
