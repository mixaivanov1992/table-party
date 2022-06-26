import { AccessiblePages } from '@models/accessiblePage';
import { GuestPages } from '@store/defaultParameters/pages/guestPages';
import { InitialPages } from '@store/defaultParameters/pages/initialPages';
import {
    PersonalDataAction,
    PersonalDataActionType,
    PersonalDataState,
    Roles,
    SetPersonalData,
} from '@models/reducer/personalDataReducer';
import { UserPage } from '@store/defaultParameters/pages/userPages';

const initialState: PersonalDataState = {
    isAuthorized: false,
    userName: '',
    favorites: [],
    libraryOwner: [],
    role: Roles.GUEST,
    accessiblePages: [...InitialPages, ...GuestPages],
};

export const personalDataReducer = (state = initialState, action: PersonalDataAction): PersonalDataState => {
    switch (action.type) {
    case PersonalDataActionType.SET_PERSONAL_DATA:
        if (action.isAuthorized) {
            const accessiblePages: AccessiblePages = [...InitialPages, ...UserPage];
            accessiblePages.sort((a, b) => a.sort - b.sort);
            return {
                ...state,
                isAuthorized: action.isAuthorized,
                role: Roles.USER,
                accessiblePages,
            };
        }

        InitialPages.sort((a, b) => a.sort - b.sort);
        return {
            ...state,
            isAuthorized: action.isAuthorized,
            role: Roles.GUEST,
            accessiblePages: [...InitialPages, ...GuestPages],
        };

    default:
        return state;
    }
};

export const setPersonalData = (isAuthorized: boolean): SetPersonalData => ({
    type: PersonalDataActionType.SET_PERSONAL_DATA,
    isAuthorized,
});
