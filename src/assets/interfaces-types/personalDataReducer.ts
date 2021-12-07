export interface PersonalDataState {
    isAuthorized: boolean,
    userName: string,
    favorites: Array<Number>,
    libraryOwner: Array<Number>
}
export enum PersonalDataActionType {
    SET_PERSONAL_DATA = 'SET_PERSONAL_DATA',
}

export interface SetPersonalData {
    type: PersonalDataActionType.SET_PERSONAL_DATA,
    isAuthorized: boolean
}

export type PersonalDataAction = SetPersonalData;

