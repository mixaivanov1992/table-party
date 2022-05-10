import React from 'react';
import styles from '@css/login/Login.module.scss';
import { IoChevronBackOutline, IoPersonCircle } from 'react-icons/io5';
import Localization from '@localization/login';
import { useHistory } from 'react-router-dom';
import { CgGoogle } from 'react-icons/cg';
import { FaYandex } from 'react-icons/fa';

const Login: React.FC = () => {
    const history = useHistory();
    return (
        <div className={styles.login}>
            <div className={styles.wrapper}>
                <div
                    tabIndex={-1}
                    onKeyPress={() => {}}
                    role="button"
                    onClick={() => history.goBack()}
                    className={styles.back}
                >
                    <span>
                        <IoChevronBackOutline />
                    </span>
                </div>
                <div className={styles.logo}><IoPersonCircle /></div>
                <div className={styles.email}>
                    <label htmlFor="email">
                        <span>{Localization.email}</span>
                        <input type="text" id="email" placeholder={Localization.enterEmail} />
                    </label>
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">
                        <span>{Localization.password}</span>
                        <input type="password" id="password" placeholder={Localization.enterPassword} />
                    </label>
                </div>
                <div className={styles.forgot_password}>
                    <a href="#forgot_password">{Localization.forgotPassword}</a>
                </div>
                <div className={styles.action}>
                    <button type="button">{Localization.login}</button>
                    <button type="button">{Localization.registration}</button>
                </div>
                <div className={styles.social}>
                    <div className={styles.google}>
                        <div><CgGoogle /></div>
                        <div>{Localization.google}</div>
                    </div>
                    <div className={styles.yandex}>
                        <div><FaYandex /></div>
                        <div>{Localization.yandex}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
