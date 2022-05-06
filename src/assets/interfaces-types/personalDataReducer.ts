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
export type PageData = {
    readonly alias: string,
    readonly path: string,
    readonly isContent: boolean,
    readonly redirect: string,
    readonly component: string
}

export type GuestAccessiblePages = {
    home: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
    rules: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
    about: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
    login: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
};
export type UserAccessiblePages = {
    home: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
    rules: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
    myRules: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
    newRule: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
    about: {readonly path: string, readonly isContent: boolean, readonly redirect: string, component: string},
};

export type PersonalDataAction = SetPersonalData;
