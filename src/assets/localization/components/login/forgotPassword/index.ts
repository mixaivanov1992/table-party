import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    'ru-RU': {
        passwordRecovery: 'Восстановление пароля',
        email: 'Email',
        recover: 'Восстановить',
        emailNotField: 'Поле "Email" не заполнено',
    },
    'en-US': {
        passwordRecovery: 'Password recovery',
        email: 'Email',
        recover: 'Recover',
        emailNotField: 'The "Email" field is not filled in',
    },
});
export default Localization;
