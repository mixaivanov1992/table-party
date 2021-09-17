//import { ILoaderState } from '@types/loader';
import {ILoaderState, LoaderAction, ISetVisibility, LoaderActionType} from '@interfaces-types/loader'

const initialState: ILoaderState = {
    isShow: false
}

export default function loaderReducer(state = initialState, action: LoaderAction): ILoaderState {
    switch (action.type){
        case LoaderActionType.SET_VISIBILITY:
            return state;
        default:
            return state;
    }
}

//export const setVisibility = ():ISetVisibility => ({type: LoaderActionType.SET_VISIBILITY, isShow: ILoaderState});