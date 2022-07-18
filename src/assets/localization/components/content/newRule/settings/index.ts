import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        addChapter: 'Добавить главу(ы)',
        deleteChapters: 'Удалить все главы',
        gameName: 'Название игры:',
        enterName: 'Введите название',
        save: 'Сохранить',
        error: 'Ошибка',
        dataSaved: 'Данные сохранены',
        close: 'Закрыть',
    },
    en: {
        addChapter: 'Add a chapter(s)',
        deleteChapters: 'Delete all chapters',
        gameName: 'Name of the game:',
        enterName: 'Enter a name',
        save: 'Save',
        error: 'Error',
        dataSaved: 'Data saved',
        close: 'Close',
    },
});
export default Localization;
