import {
    ActiveSheetState, ActiveSheetActionType, SetActiveSheet, ActiveSheetAction,
} from '@src/assets/interfaces-types/activeSheetReducer';

const initialState: ActiveSheetState = {
    chapterUid: '',
    sheetUid: '',
    content: '',
};
export const activeSheetReducer = (state = initialState, action: ActiveSheetAction): ActiveSheetState => {
    switch (action.type) {
    case ActiveSheetActionType.SET_ACTIVE_SHEET:
        return {
            ...state, chapterUid: action.chapterUid, sheetUid: action.sheetUid, content: action.content,
        };
    default:
        return state;
    }
};

export const setActiveSheet = (chapterUid: string, sheetUid: string, content: string): SetActiveSheet => ({
    type: ActiveSheetActionType.SET_ACTIVE_SHEET,
    chapterUid,
    sheetUid,
    content,
});
