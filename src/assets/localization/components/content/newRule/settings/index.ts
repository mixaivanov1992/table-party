import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    'ru-RU': {
        addChapter: 'Добавить главу(ы)',
        deleteChapters: 'Удалить все главы',
        gameName: 'Название игры',
        chapterCount: 'Количество глав',
        enterName: 'Введите название',
        save: 'Сохранить',
        error: 'Ошибка',
        dataSaved: 'Данные сохранены',
        close: 'Закрыть',
        limitReached: 'Достигнут предел',
        maximumChapters: 'Общее максимальное количество глав составляет 100',
    },
    'en-US': {
        addChapter: 'Add a chapter(s)',
        deleteChapters: 'Delete all chapters',
        gameName: 'Name of the game',
        chapterCount: 'Number of chapters',
        enterName: 'Enter a name',
        save: 'Save',
        error: 'Error',
        dataSaved: 'Data saved',
        close: 'Close',
        limitReached: 'The limit has been reached',
        maximumChapters: 'The total maximum number of chapters is 100',
    },
});
export default Localization;
