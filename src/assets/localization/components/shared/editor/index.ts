import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    'ru-RU': {
        incorrectFileFormat: 'Некорректный формат файла',
        fileTooLarge: 'Файл слишком большой',
    },
    'en-US': {
        incorrectFileFormat: 'Incorrect file format',
        fileTooLarge: 'The file is too large',
    },
});
export default Localization;
