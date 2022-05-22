import { Language } from '@src/assets/interfaces-types/language';
import {
    MainSettingsActionType, SetLanguage, MainSettingsState, MainSettingsAction,
} from '@src/assets/interfaces-types/mainSettingsReducer';

const initialState: MainSettingsState = {
    language: Language.ru,
};

export const mainSettingsReducer = (state = initialState, action: MainSettingsAction): MainSettingsState => {
    switch (action.type) {
    case MainSettingsActionType.SET_LANGUAGE:
        if (action.language in Language) {
            return { ...state, language: Language[action.language] };
        }
        return state;
    default:
        return state;
    }
};

export const setLanguage = (language: string): SetLanguage => ({
    type: MainSettingsActionType.SET_LANGUAGE,
    language,
});
