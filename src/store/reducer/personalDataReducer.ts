import { PersonalDataAction, personalDataActionType, personalDataState, SetPersonalData } from '@interfaces-types/personalDataReducer';

const initialState: personalDataState = {
    isAuthorized: false,
    userName: '',
    favorites: [],
    libraryOwner: [] 
}

export const personalDataReducer = (state = initialState, action: PersonalDataAction): personalDataState => {
    //console.log(action, action.isAuthorized);
    switch (action.type){
        case personalDataActionType.SET_PERSONAL_DATA:
            return {
                ...state,
                isAuthorized: action.isAuthorized
            };
        default:
            return state;
    }
}

export const setPersonalData = (isAuthorized: boolean): SetPersonalData => {
    return {
        type: personalDataActionType.SET_PERSONAL_DATA,
        isAuthorized: isAuthorized
    }
}