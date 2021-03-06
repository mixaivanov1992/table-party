import { actionHandler } from '@store/actions/actionHandler';
import { registrationAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import Field from '@components/Login/Field/Field';
import GoBack from '@components/Login/GoBack/GoBack';
import Localization from '@localization/components/login/registration';
import React, { useState } from 'react';
import styles from '@css/login/registration/Registration.module.scss';

const Registration: React.FC = () => {
    console.info('Registration');
    const dispatch = useDispatch();
    Localization.setLanguage(navigator.language);

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
        const result = await actionHandler(dispatch, registrationAction, { email, username, password });
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
                            <Field text={Localization.email} value={email} type="email" id="email" setState={setEmail} />
                            <Field text={Localization.username} value={username} type="password" id="username" setState={setUsername} />
                            <Field text={Localization.password} value={password} type="password" id="password" setState={setPassword} />
                            <Field text={Localization.confirm} value={confirm} type="text" id="confirm" setState={setConfirm} />
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
