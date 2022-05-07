import React, { useEffect } from 'react';
import Loader from '@src/shared/Loader/Loader';
import Routes from '@src/Routes';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setVisibility } from '@store/reducer/loaderReducer';
import { setPersonalData } from '@store/reducer/personalDataReducer';

const App: React.FC = () => {
    console.debug('App');
    const { isLoading } = useTypedSelector((state) => state.loaderReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setVisibility(false));
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
