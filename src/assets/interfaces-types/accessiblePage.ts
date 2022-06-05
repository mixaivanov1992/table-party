import { IconType } from 'react-icons';

export enum LinkLocation{
    header = 'header',
    content = 'content',
    footer = 'footer',
    navbar = 'navbar',
    separately = 'separately'
}
export enum PageRoute{
    default = '/',
    home = '/home',
    rules = '/rules',
    about = '/about',
    login = '/login',
    myRules = '/my-rules',
    newRule = '/new-rule',
    profile = '/profile',
}
export enum PageAlias{
    home = 'home',
    rules = 'rules',
    about = 'about',
    login = 'login',
    myRules = 'myRules',
    newRule = 'newRule',
    profile = 'profile',
}

export interface AccessiblePage {
    readonly linkLocation: Array<LinkLocation>,
    readonly pageRoute: PageRoute,
    readonly pageAlias: PageAlias,
    readonly pageRedirect: PageRoute | null,
    readonly componentName: string,
    readonly isContentComponent: boolean,
    readonly linkIcon: IconType,
    readonly sort: number
}

export type AccessiblePages = Array<AccessiblePage>;
