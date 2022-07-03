import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        userNotFound: 'Неверный логин или пароль',
        emailAlreadyExist: 'Электронная почта уже существует',
        userUnauthorized: 'Пользователь не авторизован',
        unActivatedUser: 'Пользователь не активирован',
        unknownError: 'Неизвестная ошибка',
        unexpectedError: 'Непредвиденная ошибка',
        incorrectEmail: 'Неправильный адрес электронной почты',
        incorrectPassword: 'Пароль должен состоять минимум из 8 символов',
    },
    en: {
        userNotFound: 'Invalid username or password',
        emailAlreadyExist: 'The email already exists',
        userUnauthorized: 'The user is not logged in',
        unActivatedUser: 'The user is not activated',
        unknownError: 'Unknown error',
        unexpectedError: 'Unknown error',
        incorrectEmail: 'Incorrect email address',
        incorrectPassword: 'The password must consist of at least 8 characters',
    },
});
export default Localization;
