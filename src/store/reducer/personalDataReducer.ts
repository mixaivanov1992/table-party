import {
    PersonalDataAction,
    PersonalDataActionType,
    PersonalDataState,
    SetPersonalData,
    Roles,
} from '@interfaces-types/personalDataReducer';

import {
    AccessiblePages,
    LinkLocation,
    PageRoute,
    PageAlias,
} from '@interfaces-types/accessiblePage';

const initialAccessiblePages: AccessiblePages = [{
    linkLocation: LinkLocation.navbar,
    pageRoute: PageRoute.default,
    pageAlias: PageAlias.home,
    pageRedirect: PageRoute.home,
    componentName: 'Home',
}, {
    linkLocation: LinkLocation.navbar,
    pageRoute: PageRoute.rules,
    pageAlias: PageAlias.rules,
    pageRedirect: null,
    componentName: 'Rules',
}, {
    linkLocation: LinkLocation.navbar,
    pageRoute: PageRoute.about,
    pageAlias: PageAlias.about,
    pageRedirect: null,
    componentName: 'About',
}, {
    linkLocation: LinkLocation.header,
    pageRoute: PageRoute.login,
    pageAlias: PageAlias.login,
    pageRedirect: null,
    componentName: 'Login',
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
                linkLocation: LinkLocation.navbar,
                pageRoute: PageRoute.myRules,
                pageAlias: PageAlias.myRules,
                pageRedirect: null,
                componentName: 'MyRules',
            }, {
                linkLocation: LinkLocation.navbar,
                pageRoute: PageRoute.newRule,
                pageAlias: PageAlias.newRule,
                pageRedirect: null,
                componentName: 'NewRule',
            }, {
                linkLocation: LinkLocation.header,
                pageRoute: PageRoute.profile,
                pageAlias: PageAlias.profile,
                pageRedirect: null,
                componentName: 'Profile',
            });

            return {
                ...state,
                isAuthorized: action.isAuthorized,
                role: Roles.USER,
                accessiblePages,
            };
        }

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
