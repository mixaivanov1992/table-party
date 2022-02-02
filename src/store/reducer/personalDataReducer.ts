import {PersonalDataAction, PersonalDataActionType, PersonalDataState, SetPersonalData, Roles, GuestAccessiblePages, UserAccessiblePages} from '@interfaces-types/personalDataReducer';

const guestAccessiblePages: GuestAccessiblePages = {
    home: {path: '/', isContent: true, redirect: '/home'},
    rules: {path: '/rules', isContent: true, redirect: ''},
    about: {path: '/about', isContent: true, redirect: ''},
    login: {path: '/login', isContent: false, redirect: ''},
}
const userAccessiblePages: UserAccessiblePages = {
    home: {path: '/', isContent: true, redirect: '/home'},
    rules: {path: '/rules', isContent: true, redirect: ''},
    myRules: {path: '/my-rules', isContent: true, redirect: ''},
    newRule: {path: '/new-rule', isContent: true, redirect: ''},
    about: {path: '/about', isContent: true, redirect: ''},
};

const initialState: PersonalDataState = {
    isAuthorized: false,
    userName: '',
    favorites: [],
    libraryOwner: [],
    role: Roles.GUEST,
    accessiblePages: guestAccessiblePages
}

export const personalDataReducer = (state = initialState, action: PersonalDataAction): PersonalDataState => {
    //console.log(action, action.isAuthorized);
    switch (action.type){
        case PersonalDataActionType.SET_PERSONAL_DATA:
            //запрос на сервак возвращает роль ... + по уникальному идентификатору
            if(action.isAuthorized){
                return {
                    ...state,
                    isAuthorized: action.isAuthorized,
                    role: Roles.USER,
                    accessiblePages: userAccessiblePages
                };
            }else{
                return {
                    ...state,
                    isAuthorized: action.isAuthorized,
                    role: Roles.GUEST,
                    accessiblePages: guestAccessiblePages
                };
            }
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