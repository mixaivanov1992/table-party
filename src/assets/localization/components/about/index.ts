import LocalizedStrings from 'react-localization';

const Localization = new LocalizedStrings({
    ru: {
        about: [
            'Мы молодые смелые и амбициозные программисты из кремниевой долины, хотелось бы сказать нам, но мы живем в Казахстане.',
            'Однако это не мешает нам быть настоящими фанатами настольных игр. Мы создали крепкую локальную игровую ячейку и хотим чтобы таких ячеек становилось все больше, они объединялись и превращались в глобальную тусовку. Мы хотим нести настолки в массы и надеемся вы к нам присоединитесь.',
        ],
    },
    en: {
        about: [
            'We are young, bold and ambitious programmers from Silicon Valley, I would like to tell us, but we live in Kazakhstan. However, this does not prevent us from being real fans of board games.',
            'We have created a strong local gaming cell and we want to see more and more such cells, they unite and turn into a global party. We want to bring board games to the masses and we hope you will join us.',
        ],
    },
});
export default Localization;
