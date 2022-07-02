import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        registration: 'Регистрация',
        email: 'Email',
        password: 'Пароль',
        confirm: 'Подтвердить',
        emailNotField: 'Поле "Email" не заполнено',
        passwordNotField: 'Поле "Пароль" не заполнено',
        confirmNotField: 'Поле "Подтвердить" не заполнено',
        passwordsNotMatch: 'Пароли не совпадают',
    },
    en: {
        registration: 'Registration',
        email: 'Email',
        password: 'Password',
        confirm: 'Confirm',
        emailNotField: 'The "Email" field is not filled in',
        passwordNotField: 'The "Password" field is not filled in',
        confirmNotField: 'The "Confirm" field is not filled in',
        passwordsNotMatch: "Passwords don't match",
    },
});
export default Localization;
