import {
    AccessiblePages,
    LinkLocation,
    PageAlias,
    PageRoute,
} from '@models/accessiblePage';
import { GiRuleBook } from 'react-icons/gi';
import { IoPersonCircle } from 'react-icons/io5';

export const UserPage: AccessiblePages = [{
    linkLocation: [LinkLocation.navbar],
    pageRoute: PageRoute.newRule,
    pageAlias: PageAlias.newRule,
    exact: true,
    component: 'NewRule/NewRule',
    isContentComponent: true,
    linkIcon: GiRuleBook,
    sort: 4,
}, {
    linkLocation: [LinkLocation.header],
    pageRoute: PageRoute.profile,
    pageAlias: PageAlias.profile,
    exact: true,
    component: 'Profile/Profile',
    isContentComponent: true,
    linkIcon: IoPersonCircle,
    sort: 1,
}];
