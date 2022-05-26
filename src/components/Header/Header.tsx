import React from 'react';
import styles from '@css/header/Header.module.scss';
import { Link } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import { Language } from '@src/assets/interfaces-types/language';
import { v4 as uuidv4 } from 'uuid';
import { setLanguage } from '@src/store/reducer/mainSettingsReducer';
import { useTypedSelector } from '@src/assets/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import Localization from '@localization/header';
import { AccessiblePages } from '@interfaces-types/accessiblePage';

interface Props {
    accessiblePages: AccessiblePages
}

const Header: React.FC<Props> = (props) => {
    console.info('Header');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const { accessiblePages } = props;

    const option = Object.keys(Language).map((item) => <option key={uuidv4()} value={item}>{item.toUpperCase()}</option>);

    const onChangeSetLanguage = (item: string): void => {
        dispatch(setLanguage(item));
    };

    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <input type="text" placeholder={Localization.searchRules} />
            </div>
            <div>
                <select value={language} onChange={(event) => onChangeSetLanguage(event.currentTarget.value)} className={styles.language}>
                    {option}
                </select>
                <div className={styles.user_menu}>
                    <Link className={styles.login} to="/login">
                        <IoPersonCircle />
                        <br />
                        <span>Гость</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
