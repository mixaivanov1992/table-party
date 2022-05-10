import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        numberSheets: 'Кол-во листов',
        chapterNumber: 'Глава №',
        chapterTitle: 'Название главы',
        deleteChapter: 'Удалить главу',
    },
    en: {
        numberSheets: 'Number of sheets',
        chapterNumber: 'Chapter №',
        chapterTitle: 'Chapter title',
        deleteChapter: 'Delete a chapter',
    },
});
export default Localization;
