import { AccessiblePages } from '@models/accessiblePage';

export interface PersonalDataState {
    isAuthorized: boolean,
    user: string,
    favorites: Array<Number>,
    libraryOwner: Array<Number>,
    role: Roles,
    accessiblePages: AccessiblePages
}
export enum Roles {
    ADMIN = 'ADMIN',
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
export type PersonalDataAction = SetPersonalData;
