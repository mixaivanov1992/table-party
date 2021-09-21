import {LoaderState, LoaderAction, LoaderActionType} from '@interfaces-types/loader';

const initialState: LoaderState = {
    isShow: false
}

export const loaderReducer = (state = initialState, action: LoaderAction): LoaderState => {
    switch (action.type){
        // case LoaderActionType.SET_VISIBILITY:
        //     return {...state, isShow: !action.isShow};
        default:
            return state;
    }
}