export interface LoaderState {
    isLoading: boolean | undefined
}
export enum LoaderActionType {
    SET_VISIBILITY = 'SET_VISIBILITY',
}

interface SetVisibility1Action {
    type: LoaderActionType.SET_VISIBILITY,
    isLoading?: boolean
}
export interface SetVisibility {
    type: LoaderActionType.SET_VISIBILITY,
    isLoading: boolean
}

export type LoaderAction = SetVisibility1Action;
