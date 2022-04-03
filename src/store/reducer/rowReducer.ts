import {
    RowState, RowActionType, SetColumnCount, AddRow, RowAction, /* SetSettingsVisibility, */ RemoveRow,
} from '@interfaces-types/rowReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState: RowState = {
    rows: [{
        index: '',
        columnCount: 0,
    }],
};

export const rowReducer = (state = initialState, action: RowAction): RowState => {
    switch (action.type) {
    case RowActionType.SET_COLUMN_COUNT: {
        const rows = [...state.rows];
        rows.forEach((row, index) => {
            if (row.index === action.index) {
                rows[index].columnCount = action.count;
            }
        });
        return { ...state, rows };
    }
    case RowActionType.ADD_ROW: {
        const rows = [...state.rows];
        [...Array(action.count)].forEach(() => {
            rows.push({
                index: uuidv4(),
                columnCount: 3,
            });
        });
        return { ...state, rows };
    }
    case RowActionType.REMOVE_ROW: {
        const rows = state.rows.filter((row) => row.index !== action.index);
        return { ...state, rows };
    }
    default:
        return state;
    }
};

export const setColumnCount = (index: string, count: number): SetColumnCount => ({
    type: RowActionType.SET_COLUMN_COUNT,
    index,
    count,
});

export const addRow = (count: number): AddRow => ({
    type: RowActionType.ADD_ROW,
    count,
});

export const removeRow = (index: string): RemoveRow => ({
    type: RowActionType.REMOVE_ROW,
    index,
});
