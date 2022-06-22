import { CgGoogle } from 'react-icons/cg';
import { FaYandex } from 'react-icons/fa';
import { IoChevronBackOutline, IoPersonCircle } from 'react-icons/io5';
import { actionHandler } from '@store/actions/actionHandler';
import { loginAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Loader from '@shared/Loader/Loader';
import Localization from '@localization/login';
import React, { useState } from 'react';
import styles from '@css/login/Login.module.scss';

const Login: React.FC = () => {
    console.info('Login');
    const dispatch = useDispatch();

    const { isLoading } = useTypedSelector((state) => state.loaderReducer);
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

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

    interface Result{
        isSuccess: boolean,
        message: string
    }
    async function onClickLogin() {
        if (!email) {
            setMessage(Localization.emailNotField);
            return;
        }
        if (!password) {
            setMessage(Localization.passwordNotField);
            return;
        }
        const result = {
            ...await dispatch(
                actionHandler(dispatch(loginAction(email, password)), language),
            ),
        } as Result;
        if (result.isSuccess) {
            history.goBack();
        } else {
            setMessage(result.message);
        }
    }

    if (isLoading) {
        return <Loader />;
    }

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
                        <input
                            onChange={(e) => { onChangeEmail(e.currentTarget.value); }}
                            type="email"
                            id="email"
                            value={email}
                            placeholder={Localization.enterEmail}
                        />
                    </label>
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">
                        <span>{Localization.password}</span>
                        <input
                            onChange={(e) => { onChangePassword(e.currentTarget.value); }}
                            type="password"
                            id="password"
                            value={password}
                            placeholder={Localization.enterPassword}
                        />
                    </label>
                </div>
                <div className={styles.forgot_password}>
                    <a href="#forgot_password">{Localization.forgotPassword}</a>
                </div>
                <div className={styles.action}>
                    <button
                        onClick={onClickLogin}
                        type="button"
                    >
                        {Localization.login}
                    </button>
                    <button
                        onClick={() => {}}
                        type="button"
                    >
                        {Localization.registration}
                    </button>
                </div>
                <div className={styles.message}>{message}</div>
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
