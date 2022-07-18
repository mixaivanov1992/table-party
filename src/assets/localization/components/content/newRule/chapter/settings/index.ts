import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    'ru-RU': {
        numberSheets: 'Кол-во листов',
        chapterNumber: 'Глава №',
        chapterTitle: 'Название главы',
        deleteChapter: 'Удалить главу',
        addSheets: 'Добавить лист(ы)',
    },
    'en-US': {
        numberSheets: 'Number of sheets',
        chapterNumber: 'Chapter №',
        chapterTitle: 'Chapter title',
        deleteChapter: 'Delete a chapter',
        addSheets: 'Add sheet(s)',
    },
});
export default Localization;
