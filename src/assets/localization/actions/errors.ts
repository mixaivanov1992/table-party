import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        userNotFound: 'Пользователь не найден',
        emailAlreadyExist: 'Электронная почта уже существует',
        userUnauthorized: 'Пользователь не авторизован',
        unActivatedUser: 'Пользователь не активирован',
        unknownError: 'Неизвестная ошибка',
    },
    en: {
        userNotFound: 'The user was not found',
        emailAlreadyExist: 'The email already exists',
        userUnauthorized: 'The user is not logged in',
        unActivatedUser: 'The user is not activated',
        unknownError: 'Unknown error',
    },
});
export default Localization;
