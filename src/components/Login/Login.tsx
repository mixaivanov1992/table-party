import React from 'react';
import styles from '@css/Login.module.scss'
import { IoChevronBackOutline, IoPersonCircle } from 'react-icons/io5';

const Login: React.FC = () => {
    return (
        <div className={styles.login}>
            <span onClick={() => history.back()} className={styles.back}>
                <span>
                    <IoChevronBackOutline size={25} color={'#f9f9f9'}/>
                </span>
            </span>
            <div className={styles.data}>
                <span className={styles.logo}><IoPersonCircle size={80} color={'#24292f'}/></span>
                <div className={styles.input}>
                    <label htmlFor="login">Логин</label><br />
                    <input type="text" id="login" />
                </div>
                <div className={styles.input}>
                    <label htmlFor="password">Пароль</label><br />
                    <input type="password" />
                </div>
                <div className={styles.btn}>
                    <input type="button" value="Войти" />
                </div>
            </div>
        </div>
    );
}

export default Login;