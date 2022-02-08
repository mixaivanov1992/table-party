import { RowState, RowActionType, SetColumnCount, AddRow, RowAction, /*SetSettingsVisibility,*/ RemoveRow } from '@interfaces-types/rowReducer';
import nextId from "react-id-generator";
const initialState: RowState = {
    rows: [{
        index: '',
        columnCount: 0,
    }]
}

export const rowReducer = (state = initialState, action: RowAction): RowState => {
    switch (action.type) {
        case RowActionType.SET_COLUMN_COUNT: {
            const rows = [...state.rows];
            rows.forEach((row, index) => {
                if(row.index === action.index){
                    rows[index].columnCount = action.count;
                }
            });
            return { ...state, rows };
        }
        case RowActionType.ADD_ROW: {
            const rows = [...state.rows];
            [...Array(action.count)].forEach(element => {
                rows.push({
                    index: nextId('row-id-'),
                    columnCount: 3
                });
            });
            return { ...state, rows };
        }
        case RowActionType.REMOVE_ROW: {
            const rows = state.rows.filter(row => {
                return row.index != action.index
            });
            return { ...state, rows };
        }
        default:
            return state;
    }
}

export const setColumnCount = (index: string, count: number): SetColumnCount => {
    return {
        type: RowActionType.SET_COLUMN_COUNT,
        index,
        count
    }
}

export const addRow = (count: number): AddRow => {
    return {
        type: RowActionType.ADD_ROW,
        count
    }
}

export const removeRow = (index: string): RemoveRow => {
    return {
        type: RowActionType.REMOVE_ROW,
        index
    }
}