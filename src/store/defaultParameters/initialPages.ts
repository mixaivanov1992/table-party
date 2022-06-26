import {
    AccessiblePages,
    LinkLocation,
    PageAlias,
    PageRoute,
} from '@models/accessiblePage';
import { ImUsers } from 'react-icons/im';
import { IoDiceSharp, IoHome } from 'react-icons/io5';

export const InitialPages: AccessiblePages = [{
    linkLocation: [LinkLocation.navbar],
    pageRoute: PageRoute.default,
    pageAlias: PageAlias.home,
    pageRedirect: PageRoute.home,
    component: 'Home/Home',
    isContentComponent: true,
    linkIcon: IoHome,
    sort: 1,
}, {
    linkLocation: [LinkLocation.navbar],
    pageRoute: PageRoute.rules,
    pageAlias: PageAlias.rules,
    pageRedirect: null,
    component: 'Rules/Rules',
    isContentComponent: true,
    linkIcon: IoDiceSharp,
    sort: 2,
}, {
    linkLocation: [LinkLocation.navbar, LinkLocation.footer],
    pageRoute: PageRoute.about,
    pageAlias: PageAlias.about,
    pageRedirect: null,
    component: 'About/About',
    isContentComponent: true,
    linkIcon: ImUsers,
    sort: 90,
}];
