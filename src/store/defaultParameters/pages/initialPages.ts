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
    pageRoute: PageRoute.home,
    pageAlias: PageAlias.home,
    exact: true,
    component: 'Home/Home',
    isContentComponent: true,
    linkIcon: IoHome,
    sort: 1,
}, {
    linkLocation: [LinkLocation.navbar],
    pageRoute: PageRoute.rules,
    pageAlias: PageAlias.rules,
    exact: true,
    component: 'Rules/Rules',
    isContentComponent: true,
    linkIcon: IoDiceSharp,
    sort: 2,
}, {
    linkLocation: [LinkLocation.navbar, LinkLocation.footer],
    pageRoute: PageRoute.about,
    pageAlias: PageAlias.about,
    exact: true,
    component: 'About/About',
    isContentComponent: true,
    linkIcon: ImUsers,
    sort: 90,
}, {
    linkLocation: [],
    pageRoute: PageRoute.page404,
    pageAlias: PageAlias.page404,
    exact: false,
    component: 'Page404/Page404',
    isContentComponent: true,
    sort: 99,
}];
