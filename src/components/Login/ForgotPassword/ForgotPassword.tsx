import { actionHandler } from '@store/actions/actionHandler';
import { forgotPasswordAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import GoBack from '@components/Login/GoBack/GoBack';
import Localization from '@localization/components/login/forgotPassword';
import React, { useState } from 'react';
import styles from '@css/login/forgotPassword/ForgotPassword.module.scss';

const ForgotPassword: React.FC = () => {
    console.info('ForgotPassword');
    const dispatch = useDispatch();
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isSent, setIsSent] = useState<boolean>(false);

    const onChangeEmail = ((value: string): void => {
        setEmail(value.trim());
    });
    async function onClickRecover() {
        setMessage('');
        if (!email) {
            setMessage(Localization.emailNotField);
            return;
        }
        const result = await actionHandler(dispatch, language, forgotPasswordAction, { email });
        if (result.isSuccess) {
            setIsSent(true);
        } else {
            setMessage(result.message);
        }
    }

    return (
        <div className={styles.forgot_password}>
            <div className={styles.wrapper}>
                <GoBack />
                <div className={styles.header}>{Localization.passwordRecovery}</div>
                { !isSent
                && (
                    <>
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
                            className={styles.recover_btn}
                            onClick={onClickRecover}
                            type="button"
                        >
                            {Localization.recover}
                        </button>
                    </>
                )}
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    );
};

export default ForgotPassword;
