export interface personalDataState {
    isAuthorized: boolean,
    userName: string,
    favorites: Array<Number>,
    libraryOwner: Array<Number>
}
export enum personalDataActionType {
    SET_PERSONAL_DATA = 'SET_PERSONAL_DATA',
}

export interface SetPersonalData {
    type: personalDataActionType.SET_PERSONAL_DATA,
    isAuthorized: boolean
}

export type PersonalDataAction = SetPersonalData;

