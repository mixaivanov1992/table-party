export interface LoaderState {
    loading: boolean | undefined
}
export enum LoaderActionType {
    SET_VISIBILITY = 'SET_VISIBILITY',
}

interface SetVisibility1Action {
    type: LoaderActionType.SET_VISIBILITY,
    loading?: boolean
}
export interface SetVisibility {
    type: LoaderActionType.SET_VISIBILITY,
    loading: boolean
}

export type LoaderAction = SetVisibility1Action;
