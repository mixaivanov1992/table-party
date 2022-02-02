export interface PersonalDataState {
    isAuthorized: boolean,
    userName: string,
    favorites: Array<Number>,
    libraryOwner: Array<Number>,
    role: Roles,
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}
export enum Roles {
    GUEST = 'GUEST',
    USER = 'USER',
}

export enum PersonalDataActionType {
    SET_PERSONAL_DATA = 'SET_PERSONAL_DATA',
}

export interface SetPersonalData {
    type: PersonalDataActionType.SET_PERSONAL_DATA,
    isAuthorized: boolean
}

// enum Path {
//     home = '/',
//     rules = '/rules',
//     about = '/about',
//     myRules = '/my-rules',
//     newRule = '/new-rule',
// }
// enum Redirect {
//     home = '/home',
//     rules = '',
//     about = '',
//     myRules = '',
//     newRule = '',
// }
// enum Page {
//     home = 'home',
//     rules = 'rules',
//     about = 'about',
//     myRules = 'myRules',
//     newRule = 'newRule',
// }

export type PageData = {
    name: string,
    path: string,
    isContent: boolean,
    redirect: string
}

export type GuestAccessiblePages = {
    home: {path: '/', isContent: true, redirect: '/home'},
    rules: {path: '/rules', isContent: true, redirect: ''},
    about: {path: '/about', isContent: true, redirect: ''},
    login: {path: '/login', isContent: false, redirect: ''},
};
export type UserAccessiblePages = {
    home: {path: '/', isContent: true, redirect: '/home'},
    rules: {path: '/rules', isContent: true, redirect: ''},
    myRules: {path: '/my-rules', isContent: true, redirect: ''},
    newRule: {path: '/new-rule', isContent: true, redirect: ''},
    about: {path: '/about', isContent: true, redirect: ''},
};

export type PersonalDataAction = SetPersonalData;

