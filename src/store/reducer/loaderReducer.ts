import {LoaderState, LoaderAction, LoaderActionType, SetVisibility} from '@interfaces-types/loader';

const initialState: LoaderState = {
    loading: true
}

export const loaderReducer = (state = initialState, action: LoaderAction): LoaderState => {
    //console.log(action, action.loading);
    switch (action.type){
        case LoaderActionType.SET_VISIBILITY:
            return {loading: action.loading};
        default:
            return state;
    }
}

export const setVisibility = (loading:boolean): SetVisibility => {
    return {
        type: LoaderActionType.SET_VISIBILITY,
        loading: loading
    }
}