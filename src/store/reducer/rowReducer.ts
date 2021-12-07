import { RowState, RowActionType, SetColumnCount, AddRow, RowAction, SetSettingsVisibility, RemoveRow } from '@interfaces-types/rowReducer';

const initialState: RowState = {
    rows: [{
        index: 0,
        columnCount: 1,
        settings: {
            visibility: false
        }
    }]
}

export const rowReducer = (state = initialState, action: RowAction): RowState => {
    let newState;

    switch (action.type) {
        case RowActionType.SET_COLUMN_COUNT:
            return {
                ...state,
                rows: [...state.rows]
            };
        case RowActionType.SET_SETTINGS_VISIBILITY:
            newState = { ...state };
            for (let i = 0; i < newState.rows.length; i++) {
                if (newState.rows[i].index === action.index) {
                    newState.rows[i].settings.visibility = !newState.rows[i].settings.visibility;
                } else {
                    newState.rows[i].settings.visibility = false;
                }
            }
            return newState;
        case RowActionType.ADD_ROW:
            newState = { ...state };
            for (let i = 0; i < action.count; i++) {
                newState.rows.push({
                    index: Math.floor(Math.random() * (Date.now() - i) + i),
                    settings: {
                        visibility: false
                    },
                    columnCount: 1
                });
            }
            return newState;
        case RowActionType.REMOVE_ROW:
            newState = { ...state, rows: [] };
            for (let i = 0; i < state.rows.length; i++) {
                if (state.rows[i].index !== action.index) {
                    newState.rows.push({ ...state.rows[i] });
                }
            }
            return newState;
        default:
            return state;
    }
}

export const setColumnCount = (index: number, count: number): SetColumnCount => {
    return {
        type: RowActionType.SET_COLUMN_COUNT,
        index,
        count
    }
}

export const setSettingsVisibility = (index: number): SetSettingsVisibility => {
    return {
        type: RowActionType.SET_SETTINGS_VISIBILITY,
        index
    }
}

export const addRow = (count: number): AddRow => {
    return {
        type: RowActionType.ADD_ROW,
        count
    }
}

export const removeRow = (index: number): RemoveRow => {
    return {
        type: RowActionType.REMOVE_ROW,
        index
    }
}