import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        email: 'Email:',
        enterEmail: 'Введите email',
        password: 'Пароль:',
        enterPassword: 'Введите пароль',
        forgotPassword: 'Забыли пароль?',
        login: 'Войти',
        registration: 'Регистрация',
        google: 'Войти с помощью Google',
        yandex: 'Войти с помощью Yandex',
        emailNotField: 'Поле "Email" не заполнено',
        passwordNotField: 'Поле "Пароль" не заполнено',
    },
    en: {
        email: 'Email:',
        enterEmail: 'Enter email',
        password: 'Password:',
        enterPassword: 'Enter the password',
        forgotPassword: 'Forgot your password?',
        login: 'Log in',
        registration: 'Registration',
        google: 'Log in with Google',
        yandex: 'Log in using Yandex',
        emailNotField: 'The "Email" field is not filled in',
        passwordNotField: 'The "Password" field is not filled in',
    },
});
export default Localization;
