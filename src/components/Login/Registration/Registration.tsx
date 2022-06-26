import { useTypedSelector } from '@hooks/useTypedSelector';
import GoBack from '@components/Login/GoBack/GoBack';
import Localization from '@localization/components/login/registration';
import React, { useState } from 'react';
import styles from '@css/login/registration/Registration.module.scss';

const Registration: React.FC = () => {
    console.info('Registration');

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const onChangeEmail = ((value: string): void => {
        setEmail(value.trim());
    });
    const onChangePassword = ((value: string): void => {
        setPassword(value.trim());
    });
    const onChangeConfirm = ((value: string): void => {
        setConfirm(value.trim());
    });
    async function onClickRegistration() {
        if (!email) {
            setMessage(Localization.emailNotField);
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
        }
    }

    return (
        <div className={styles.registration}>
            <div className={styles.wrapper}>
                <GoBack />
                <div className={styles.header}>{Localization.registration}</div>
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
                <div className={styles.confirm}>
                    <label htmlFor="confirm">
                        <input
                            onChange={(e) => { onChangeConfirm(e.currentTarget.value); }}
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
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    );
};

export default Registration;
