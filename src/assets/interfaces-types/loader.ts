export interface ILoaderState{
    isShow: boolean
}
export enum LoaderActionType {
    SET_VISIBILITY = 'SET_VISIBILITY',
}

interface ISetVisibility1Action {
    type: LoaderActionType.SET_VISIBILITY
}

export type LoaderAction = ISetVisibility1Action;

export interface ISetVisibility {
    type: LoaderActionType.SET_VISIBILITY
    isShow: boolean
}