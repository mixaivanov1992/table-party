import {LoaderState, LoaderAction, LoaderActionType, SetVisibility} from '@interfaces-types/loaderReducer';

const initialState: LoaderState = {
    isLoading: true
}

export const loaderReducer = (state = initialState, action: LoaderAction): LoaderState => {
    //console.log(action, action.loading);
    switch (action.type){
        case LoaderActionType.SET_VISIBILITY:
            return {isLoading: action.isLoading};
        default:
            return state;
    }
}

export const setVisibility = (isLoading:boolean): SetVisibility => {
    return {
        type: LoaderActionType.SET_VISIBILITY,
        isLoading
    }
}