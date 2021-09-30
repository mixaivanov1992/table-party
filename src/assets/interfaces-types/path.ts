export enum Path {
    home = 'home',
    rules = 'rules',
    about = 'about',
    login = 'login',
    library = 'library',
}

export type ContentPath = Path.home | Path.about | Path.rules | Path.library;