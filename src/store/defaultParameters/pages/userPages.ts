import {
    AccessiblePages,
    LinkLocation,
    PageAlias,
    PageRoute,
} from '@models/accessiblePage';
import { GiRuleBook } from 'react-icons/gi';
import { ImBook } from 'react-icons/im';
import { IoPersonCircle } from 'react-icons/io5';

export const UserPage: AccessiblePages = [{
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
}];
