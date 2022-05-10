import React, { useEffect, useState } from 'react';
import Loader from '@src/shared/Loader/Loader';
import Routes from '@src/Routes';
import { useDispatch } from 'react-redux';
import { setPersonalData } from '@store/reducer/personalDataReducer';

const App: React.FC = () => {
    console.debug('App');
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(false);
        dispatch(setPersonalData(true));
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Routes />
    );
};

export default App;
