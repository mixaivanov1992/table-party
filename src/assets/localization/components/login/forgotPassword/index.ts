import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        passwordRecovery: 'Восстановление пароля',
        email: 'Email',
        recover: 'Восстановить',
        emailNotField: 'Поле "Email" не заполнено',
    },
    en: {
        passwordRecovery: 'Password recovery',
        email: 'Email',
        recover: 'Recover',
        emailNotField: 'The "Email" field is not filled in',
    },
});
export default Localization;
