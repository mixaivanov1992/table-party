import { actionHandler } from '@store/actions/actionHandler';
import { registrationAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import GoBack from '@components/Login/GoBack/GoBack';
import Localization from '@localization/components/login/registration';
import React, { useState } from 'react';
import styles from '@css/login/registration/Registration.module.scss';

const Registration: React.FC = () => {
    console.info('Registration');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isRegistered, setIsRegistered] = useState<boolean>(false);

    async function onClickRegistration() {
        setMessage('');
        if (!email) {
            setMessage(Localization.emailNotField);
            return;
        }
        if (!username) {
            setMessage(Localization.usernameNotField);
            return;
        }
        if (!password) {
            setMessage(Localization.passwordNotField);
            return;
        }
        if (!confirm) {
            setMessage(Localization.confirmNotField);
            return;
        }
        if (confirm !== password) {
            setMessage(Localization.passwordsNotMatch);
            return;
        }
        const result = await actionHandler(dispatch, language, registrationAction, { email, username, password });
        if (result.isSuccess) {
            setIsRegistered(true);
        } else {
            setMessage(result.message);
        }
    }

    return (
        <div className={styles.registration}>
            <div className={styles.wrapper}>
                <GoBack />
                <div className={styles.header}>{Localization.registration}</div>
                { !isRegistered
                    && (
                        <>
                            <div className={styles.email}>
                                <label htmlFor="email">
                                    <input
                                        onChange={(e) => { setEmail(e.currentTarget.value.trim()); }}
                                        type="email"
                                        id="email"
                                        value={email}
                                    />
                                    {email ? <span className={styles.raise}>{Localization.email}</span> : <span>{Localization.email}</span>}
                                </label>
                            </div>
                            <div className={styles.username}>
                                <label htmlFor="username">
                                    <input
                                        onChange={(e) => { setUsername(e.currentTarget.value.trim()); }}
                                        type="text"
                                        id="username"
                                        value={username}
                                    />
                                    {username ? <span className={styles.raise}>{Localization.username}</span> : <span>{Localization.username}</span>}
                                </label>
                            </div>
                            <div className={styles.password}>
                                <label htmlFor="password">
                                    <input
                                        onChange={(e) => { setPassword(e.currentTarget.value.trim()); }}
                                        type="password"
                                        id="password"
                                        value={password}
                                    />
                                    {password ? <span className={styles.raise}>{Localization.password}</span> : <span>{Localization.password}</span>}
                                </label>
                            </div>
                            <div className={styles.confirm}>
                                <label htmlFor="confirm">
                                    <input
                                        onChange={(e) => { setConfirm(e.currentTarget.value.trim()); }}
                                        type="password"
                                        id="confirm"
                                        value={confirm}
                                    />
                                    {confirm ? <span className={styles.raise}>{Localization.confirm}</span> : <span>{Localization.confirm}</span>}
                                </label>
                            </div>
                            <div className={styles.registration_btn}>
                                <button
                                    onClick={onClickRegistration}
                                    type="button"
                                >
                                    {Localization.registration}
                                </button>
                            </div>
                        </>
                    )}
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    );
};

export default Registration;
