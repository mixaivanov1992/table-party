import { PersonalDataAction, PersonalDataActionType, PersonalDataState, SetPersonalData } from '@interfaces-types/personalDataReducer';

const initialState: PersonalDataState = {
    isAuthorized: false,
    userName: '',
    favorites: [],
    libraryOwner: [] 
}

export const personalDataReducer = (state = initialState, action: PersonalDataAction): PersonalDataState => {
    //console.log(action, action.isAuthorized);
    switch (action.type){
        case PersonalDataActionType.SET_PERSONAL_DATA:
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
        type: PersonalDataActionType.SET_PERSONAL_DATA,
        isAuthorized: isAuthorized
    }
}