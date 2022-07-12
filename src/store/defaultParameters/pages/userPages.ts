import {
    AccessiblePages,
    LinkLocation,
    PageAlias,
    PageRoute,
} from '@models/accessiblePage';

export const UserPage: AccessiblePages = [{
    linkLocation: [LinkLocation.navbar],
    pageRoute: PageRoute.newRule,
    pageAlias: PageAlias.newRule,
    exact: true,
    component: 'NewRule/NewRule',
    isContentComponent: true,
    linkIcon: {
        path: 'gi',
        name: 'GiRuleBook',
    },
    sort: 4,
}, {
    linkLocation: [LinkLocation.header],
    pageRoute: PageRoute.profile,
    pageAlias: PageAlias.profile,
    exact: true,
    component: 'Profile/Profile',
    isContentComponent: true,
    linkIcon: {
        path: 'io5',
        name: 'IoPersonCircle',
    },
    sort: 1,
}];
