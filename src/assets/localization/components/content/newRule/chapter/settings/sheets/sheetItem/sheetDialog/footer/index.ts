import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    'ru-RU': {
        sheetCover: 'Обложка листа:',
        coverText: 'Текст обложки',
        coverImage: 'Изображение обложки',
        failedUploadImage: 'Не удалось загрузить изображение',
    },
    'en-US': {
        sheetCover: 'Sheet cover:',
        coverText: 'Cover text',
        coverImage: 'Cover image',
        failedUploadImage: 'Failed to upload image',
    },
});
export default Localization;
