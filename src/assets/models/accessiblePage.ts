export enum LinkLocation{
    header = 'header',
    content = 'content',
    footer = 'footer',
    navbar = 'navbar',
    separately = 'separately'
}
export enum PageRoute{
    home = '/',
    rules = '/rules',
    about = '/about',
    login = '/login',
    registration = '/registration',
    forgotPassword = '/forgotPassword',
    newRule = '/new-rule',
    profile = '/profile',
    page404 = '*',
}
export enum PageAlias{
    home = 'home',
    rules = 'rules',
    about = 'about',
    login = 'login',
    registration = 'registration',
    forgotPassword = 'forgotPassword',
    newRule = 'newRule',
    profile = 'profile',
    page404 = 'page404',
}

export interface AccessiblePage {
    readonly linkLocation: Array<LinkLocation>,
    readonly pageRoute: PageRoute,
    readonly pageAlias: PageAlias,
    readonly exact: boolean,
    readonly component: string,
    readonly isContentComponent: boolean,
    readonly linkIcon?: IconData,
    readonly sort: number
}
type IconData = {
    path: string,
    name: string
}

export type AccessiblePages = Array<AccessiblePage>;
