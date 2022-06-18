import { GiRuleBook } from 'react-icons/gi';
import { ImBook, ImUsers } from 'react-icons/im';
import { IoDiceSharp, IoHome, IoPersonCircle } from 'react-icons/io5';
import {
    PersonalDataAction,
    PersonalDataActionType,
    PersonalDataState,
    Roles,
    SetPersonalData,
} from '@src/assets/models/reducer/personalDataReducer';

import {
    AccessiblePages,
    LinkLocation,
    PageAlias,
    PageRoute,
} from '@src/assets/models/accessiblePage';

const initialAccessiblePages: AccessiblePages = [{
    linkLocation: [LinkLocation.navbar],
    pageRoute: PageRoute.default,
    pageAlias: PageAlias.home,
    pageRedirect: PageRoute.home,
    componentName: 'Home',
    isContentComponent: true,
    linkIcon: IoHome,
    sort: 1,
}, {
    linkLocation: [LinkLocation.navbar],
    pageRoute: PageRoute.rules,
    pageAlias: PageAlias.rules,
    pageRedirect: null,
    componentName: 'Rules',
    isContentComponent: true,
    linkIcon: IoDiceSharp,
    sort: 2,
}, {
    linkLocation: [LinkLocation.navbar, LinkLocation.footer],
    pageRoute: PageRoute.about,
    pageAlias: PageAlias.about,
    pageRedirect: null,
    componentName: 'About',
    isContentComponent: true,
    linkIcon: ImUsers,
    sort: 98,
}, {
    linkLocation: [LinkLocation.header],
    pageRoute: PageRoute.login,
    pageAlias: PageAlias.login,
    pageRedirect: null,
    componentName: 'Login',
    isContentComponent: false,
    linkIcon: IoPersonCircle,
    sort: 99,
}];

const initialState: PersonalDataState = {
    isAuthorized: false,
    userName: '',
    favorites: [],
    libraryOwner: [],
    role: Roles.GUEST,
    accessiblePages: initialAccessiblePages,
};

export const personalDataReducer = (state = initialState, action: PersonalDataAction): PersonalDataState => {
    switch (action.type) {
    case PersonalDataActionType.SET_PERSONAL_DATA:

        if (action.isAuthorized) {
            const accessiblePages: AccessiblePages = [...initialAccessiblePages];
            accessiblePages.pop();
            accessiblePages.push({
                linkLocation: [LinkLocation.navbar],
                pageRoute: PageRoute.myRules,
                pageAlias: PageAlias.myRules,
                pageRedirect: null,
                componentName: 'MyRules',
                isContentComponent: true,
                linkIcon: ImBook,
                sort: 3,
            }, {
                linkLocation: [LinkLocation.navbar],
                pageRoute: PageRoute.newRule,
                pageAlias: PageAlias.newRule,
                pageRedirect: null,
                componentName: 'NewRule',
                isContentComponent: true,
                linkIcon: GiRuleBook,
                sort: 4,
            }, {
                linkLocation: [LinkLocation.header],
                pageRoute: PageRoute.profile,
                pageAlias: PageAlias.profile,
                pageRedirect: null,
                componentName: 'Profile',
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

        initialAccessiblePages.sort((a, b) => a.sort - b.sort);
        return {
            ...state,
            isAuthorized: action.isAuthorized,
            role: Roles.GUEST,
            accessiblePages: initialAccessiblePages,
        };

    default:
        return state;
    }
};

export const setPersonalData = (isAuthorized: boolean): SetPersonalData => ({
    type: PersonalDataActionType.SET_PERSONAL_DATA,
    isAuthorized,
});
