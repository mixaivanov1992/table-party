export enum Path {
    home = 'home',
    rules = 'rules',
    about = 'about',
    login = 'login',
    myRules = 'my-rules',
    newRule = 'new-rule'
}

export type ContentPath = Path.home | Path.about | Path.rules | Path.myRules | Path.newRule;