import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    'ru-RU': {
        numberSheets: 'Кол-во листов',
        chapterNumber: 'Глава №',
        chapterTitle: 'Название главы',
        deleteChapter: 'Удалить главу',
        addSheets: 'Добавить лист(ы)',
        limitReached: 'Достигнут предел',
        maximumSheets: 'Общее максимальное количество листов 100',
    },
    'en-US': {
        numberSheets: 'Number of sheets',
        chapterNumber: 'Chapter №',
        chapterTitle: 'Chapter title',
        deleteChapter: 'Delete a chapter',
        addSheets: 'Add sheet(s)',
        limitReached: 'The limit has been reached',
        maximumSheets: 'The total maximum number of sheets is 100',
    },
});
export default Localization;
