import {
    AccessiblePages,
    LinkLocation,
    PageAlias,
    PageRoute,
} from '@models/accessiblePage';
import { GiRuleBook } from 'react-icons/gi';
import { GuestPages } from '@store/defaultParameters/guestPages';
import { ImBook } from 'react-icons/im';
import { InitialPages } from '@store/defaultParameters/initialPages';
import { IoPersonCircle } from 'react-icons/io5';
import {
    PersonalDataAction,
    PersonalDataActionType,
    PersonalDataState,
    Roles,
    SetPersonalData,
} from '@models/reducer/personalDataReducer';

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
            const accessiblePages: AccessiblePages = [...InitialPages];
            accessiblePages.push({
                linkLocation: [LinkLocation.navbar],
                pageRoute: PageRoute.myRules,
                pageAlias: PageAlias.myRules,
                pageRedirect: null,
                component: 'MyRules/MyRules',
                isContentComponent: true,
                linkIcon: ImBook,
                sort: 3,
            }, {
                linkLocation: [LinkLocation.navbar],
                pageRoute: PageRoute.newRule,
                pageAlias: PageAlias.newRule,
                pageRedirect: null,
                component: 'NewRule/NewRule',
                isContentComponent: true,
                linkIcon: GiRuleBook,
                sort: 4,
            }, {
                linkLocation: [LinkLocation.header],
                pageRoute: PageRoute.profile,
                pageAlias: PageAlias.profile,
                pageRedirect: null,
                component: 'Profile/Profile',
                isContentComponent: true,
                linkIcon: IoPersonCircle,
                sort: 1,
            });

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
