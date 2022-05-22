import { Language } from './language';

export interface MainSettingsState{
    language: Language
}

export enum MainSettingsActionType{
    SET_LANGUAGE = 'SET_LANGUAGE',
}

export interface SetLanguage{
    type: MainSettingsActionType.SET_LANGUAGE,
    language: string
}
export type MainSettingsAction = SetLanguage;
