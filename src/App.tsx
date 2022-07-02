import { actionHandler } from '@store/actions/actionHandler';
import { checkAuthAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Loader from '@shared/Loader/Loader';
import React, { useEffect } from 'react';
import Routes from '@src/Routes';

const App: React.FC = () => {
    console.info('App');
    const dispatch = useDispatch();
    const { language } = useTypedSelector((state) => state.mainSettingsReducer);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            actionHandler(dispatch, language, checkAuthAction, {});
        }
    }, []);

    return (
        <>
            <Loader />
            <Routes />
        </>
    );
};

export default App;
