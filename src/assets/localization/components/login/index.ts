import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    'ru-RU': {
        entrance: 'Вход',
        email: 'Email',
        password: 'Пароль',
        forgotPassword: 'Забыли пароль?',
        login: 'Войти',
        registration: 'Регистрация',
        google: 'Войти через Google',
        emailNotField: 'Поле "Email" не заполнено',
        passwordNotField: 'Поле "Пароль" не заполнено',
    },
    'en-US': {
        entrance: 'Entrance',
        email: 'Email',
        password: 'Password',
        forgotPassword: 'Forgot your password?',
        login: 'Log in',
        registration: 'Registration',
        google: 'Log in via Google',
        emailNotField: 'The "Email" field is not filled in',
        passwordNotField: 'The "Password" field is not filled in',
    },
});
export default Localization;
