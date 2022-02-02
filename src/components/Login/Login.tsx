import React from 'react';
import styles from '@css/Login.module.scss'
import { IoChevronBackOutline, IoPersonCircle } from 'react-icons/io5';
import { FcGoogle } from "react-icons/fc";

const Login: React.FC = () => {
    return (
        <div className={styles.login}>
            <div className={styles.data}>
                <span onClick={() => history.back()} className={styles.back}>
                    <span>
                        <IoChevronBackOutline/>
                    </span>
                </span>
                <span className={styles.logo}><IoPersonCircle/></span>
                <div className={styles.input}>
                    <input type="text" id="login" placeholder="Введите логин"/>
                    <label htmlFor="login">Логин:</label>
                </div>
                <div className={styles.input}>
                    <input type="password" id="password" placeholder="Введите пароль"/>
                    <label htmlFor="password">Пароль:</label>
                </div>
                <div className={styles.forgot_password}>
                    <a href="">Забыли пароль?</a>
                </div>
                <div className={styles.btn}>
                    <input type="button" value="Войти" />
                    <input type="button" value="Регистрация" />
                </div>
                <div className={styles.social_login}>
                    <div>Войти через</div>
                    <FcGoogle/>
                </div>
            </div>
        </div>
    );
}

export default Login;