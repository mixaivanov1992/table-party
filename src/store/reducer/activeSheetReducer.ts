import {
    ActiveSheetAction, ActiveSheetActionType, ActiveSheetState, SetActiveSheet,
} from '@models/reducer/activeSheetReducer';

const initialState: ActiveSheetState = {
    chapterUid: '',
    sheetUid: '',
    content: '',
    cover: '',
};
export const activeSheetReducer = (state = initialState, action: ActiveSheetAction): ActiveSheetState => {
    switch (action.type) {
    case ActiveSheetActionType.SET_ACTIVE_SHEET:
        return {
            ...state, chapterUid: action.chapterUid, sheetUid: action.sheetUid, content: action.content, cover: action.cover,
        };
    default:
        return state;
    }
};

export const setActiveSheet = (chapterUid: string, sheetUid: string, content: string, cover: string): SetActiveSheet => ({
    type: ActiveSheetActionType.SET_ACTIVE_SHEET,
    chapterUid,
    sheetUid,
    content,
    cover,
});
