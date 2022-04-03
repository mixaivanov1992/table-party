export interface RowState{
    rows: Array<{
        index: string,
        columnCount: number,
    }>
}

export enum RowActionType{
    SET_COLUMN_COUNT = 'SET_COLUMN_COUNT',
    ADD_ROW = 'ADD_ROW',
    REMOVE_ROW = 'REMOVE_ROW'
}

export interface SetColumnCount{
    type: RowActionType.SET_COLUMN_COUNT,
    index: string,
    count: number
}

export interface AddRow{
    type: RowActionType.ADD_ROW,
    count: number
}

export interface RemoveRow{
    type: RowActionType.REMOVE_ROW,
    index: string
}

export type RowAction = SetColumnCount | AddRow | RemoveRow;
