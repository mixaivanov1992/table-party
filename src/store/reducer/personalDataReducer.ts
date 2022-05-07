import {
    PersonalDataAction, PersonalDataActionType, PersonalDataState, SetPersonalData, Roles, GuestAccessiblePages, UserAccessiblePages,
} from '@interfaces-types/personalDataReducer';

const guestAccessiblePages: GuestAccessiblePages = {
    home: {
        path: '/', isContent: true, redirect: '/home', component: 'Home',
    },
    rules: {
        path: '/rules', isContent: true, redirect: '', component: 'Rules',
    },
    about: {
        path: '/about', isContent: true, redirect: '', component: 'About',
    },
    login: {
        path: '/login', isContent: false, redirect: '', component: 'Login',
    },
};

const userAccessiblePages: UserAccessiblePages = {
    home: {
        path: '/', isContent: true, redirect: '/home', component: 'Home',
    },
    rules: {
        path: '/rules', isContent: true, redirect: '', component: 'Rules',
    },
    myRules: {
        path: '/my-rules', isContent: true, redirect: '', component: 'MyRules',
    },
    newRule: {
        path: '/new-rule', isContent: true, redirect: '', component: 'NewRule',
    },
    about: {
        path: '/about', isContent: true, redirect: '', component: 'About',
    },
};

const initialState: PersonalDataState = {
    isAuthorized: false,
    userName: '',
    favorites: [],
    libraryOwner: [],
    role: Roles.GUEST,
    accessiblePages: guestAccessiblePages,
};

export const personalDataReducer = (state = initialState, action: PersonalDataAction): PersonalDataState => {
    switch (action.type) {
    case PersonalDataActionType.SET_PERSONAL_DATA:
        // запрос на сервак возвращает роль ... + по уникальному идентификатору
        if (action.isAuthorized) {
            return {
                ...state,
                isAuthorized: action.isAuthorized,
                role: Roles.USER,
                accessiblePages: userAccessiblePages,
            };
        }
        return {
            ...state,
            isAuthorized: action.isAuthorized,
            role: Roles.GUEST,
            accessiblePages: guestAccessiblePages,
        };

    default:
        return state;
    }
};

export const setPersonalData = (isAuthorized: boolean): SetPersonalData => ({
    type: PersonalDataActionType.SET_PERSONAL_DATA,
    isAuthorized,
});
