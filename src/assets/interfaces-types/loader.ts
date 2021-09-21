export interface LoaderState{
    isShow: boolean
}
export enum LoaderActionType {
    SET_VISIBILITY = 'SET_VISIBILITY',
}

interface SetVisibility1Action {
    type: LoaderActionType.SET_VISIBILITY
}

export type LoaderAction = SetVisibility1Action;
