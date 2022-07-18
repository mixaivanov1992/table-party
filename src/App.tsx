import { actionHandler } from '@store/actions/actionHandler';
import { checkAuthAction } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import Loader from '@shared/Loader/Loader';
import Message from '@shared/Message/Message';
import React, { useEffect } from 'react';
import Routes from '@src/Routes';

const App: React.FC = () => {
    console.info('App');
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            actionHandler(dispatch, checkAuthAction, {});
        }
    }, []);

    return (
        <>
            <Loader />
            <Routes />
            <Message />
        </>
    );
};

export default App;
