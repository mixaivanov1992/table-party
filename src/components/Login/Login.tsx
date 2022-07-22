import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';
import { PageAlias, PageRoute } from '@models/accessiblePage';
import { actionHandler } from '@store/actions/actionHandler';
import { loginAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import GoBack from '@components/Login/GoBack/GoBack';
import Localization from '@localization/components/login';
import React, { useState } from 'react';
import styles from '@css/login/Login.module.scss';

const Login: React.FC = () => {
    console.info('Login');
    const dispatch = useDispatch();

    Localization.setLanguage(navigator.language);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const history = useHistory();

    const onChangeEmail = ((value: string): void => {
        setEmail(value.trim());
    });
    const onChangePassword = ((value: string): void => {
        setPassword(value.trim());
    });
    async function onClickLogin() {
        if (!email) {
            setMessage(Localization.emailNotField);
            return;
        }
        if (!password) {
            setMessage(Localization.passwordNotField);
            return;
        }
        const result = await actionHandler(dispatch, loginAction, { email, password });
        if (result.isSuccess) {
            history.push(PageRoute.home);
        } else {
            setMessage(result.message);
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.wrapper}>
                <GoBack />
                <div className={styles.header}>{Localization.entrance}</div>
                <div className={styles.email}>
                    <label htmlFor="email">
                        <input
                            onChange={(e) => { onChangeEmail(e.currentTarget.value); }}
                            type="email"
                            id="email"
                            value={email}
                        />
                        {email ? <span className={styles.raise}>{Localization.email}</span> : <span>{Localization.email}</span>}
                    </label>
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">
                        <input
                            onChange={(e) => { onChangePassword(e.currentTarget.value); }}
                            type="password"
                            id="password"
                            value={password}
                        />
                        {password ? <span className={styles.raise}>{Localization.password}</span> : <span>{Localization.password}</span>}
                    </label>
                </div>
                <div>
                    <div className={styles.message}>{message}</div>
                    <Link key={uuidv4()} className={styles.forgot_password} to={PageRoute.forgotPassword}>
                        {Localization.forgotPassword}
                    </Link>
                    <button
                        className={styles.login_btn}
                        onClick={onClickLogin}
                        type="button"
                    >
                        {Localization.login}
                    </button>
                    <div>
                        <Link key={uuidv4()} className={styles.registration} to={PageRoute.registration}>
                            {Localization.registration}
                        </Link>
                    </div>
                </div>
                <div className={styles.social}>
                    <div className={styles.google}>
                        <FcGoogle />
                        <span>{Localization.google}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
