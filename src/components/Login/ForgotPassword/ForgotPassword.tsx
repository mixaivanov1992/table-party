import GoBack from '@components/Login/GoBack/GoBack';
import Localization from '@localization/components/login/forgotPassword';
import React, { useState } from 'react';
import styles from '@css/login/forgotPassword/ForgotPassword.module.scss';

const ForgotPassword: React.FC = () => {
    console.info('ForgotPassword');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const onChangeEmail = ((value: string): void => {
        setEmail(value.trim());
    });

    return (
        <div className={styles.forgot_password}>
            <div className={styles.wrapper}>
                <GoBack />
                <div className={styles.header}>{Localization.passwordRecovery}</div>
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
                <button
                    className={styles.recover}
                    onClick={() => {}}
                    type="button"
                >
                    {Localization.recover}
                </button>
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    );
};

export default ForgotPassword;
