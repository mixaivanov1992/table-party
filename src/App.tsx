import React, { useEffect, useState } from 'react';
import Loader from '@src/shared/Loader/Loader';
import Routes from '@src/Routes';
import { useDispatch } from 'react-redux';
import { setPersonalData } from '@store/reducer/personalDataReducer';

const App: React.FC = () => {
    console.info('App');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(false);
        dispatch(setPersonalData(true));
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Routes />
    );
};

export default App;
