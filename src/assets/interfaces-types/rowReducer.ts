export interface RowState{
    rows: [{
            index: number,
            columnCount: number,
            settings: {
                visibility: boolean
            }
    }] | []
}

export enum RowActionType{
    SET_COLUMN_COUNT = 'SET_COLUMN_COUNT',
    // SET_SETTINGS_VISIBILITY = 'SET_SETTINGS_VISIBILITY',
    ADD_ROW = 'ADD_ROW',
    REMOVE_ROW = 'REMOVE_ROW'
}

export interface SetColumnCount{
    type: RowActionType.SET_COLUMN_COUNT,
    index: number,
    count: number
}

// export interface SetSettingsVisibility{
//     type: RowActionType.SET_SETTINGS_VISIBILITY,
//     index: number
// }

export interface AddRow{
    type: RowActionType.ADD_ROW,
    count: number
}

export interface RemoveRow{
    type: RowActionType.REMOVE_ROW,
    index: number
}

export type RowAction = SetColumnCount /*| SetSettingsVisibility*/ | AddRow | RemoveRow;