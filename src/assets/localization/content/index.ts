import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        home: 'Добро пожаловать',
        rules: 'Правила',
        about: 'О нас',
        myRules: 'Мои правила',
        newRule: 'Новые правила',
    },
    en: {
        home: 'Welcome',
        rules: 'Rules',
        about: 'About us',
        myRules: 'My rules',
        newRule: 'New rules',
    },
});
export default Localization;
