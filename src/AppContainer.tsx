import React, { useEffect } from 'react';
import Loader from '@shared/loader/Loader';
import App from '@src/App';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setVisibility } from '@store/reducer/loaderReducer';
import { setPersonalData } from './store/reducer/personalDataReducer';

const AppContainer: React.FC = () => {
	const	loader = useTypedSelector(state => state.loader),
			personalData = useTypedSelector(state => state.personalData),
			dispatch = useDispatch();

			console.log(personalData);
	//[loader, setLoader] = useState(useTypedSelector(state => state.loader));
	useEffect(() => {
		dispatch(setVisibility(!loader.loading));
		dispatch(setPersonalData(true));
	}, []);

	if (loader.loading) {
		return <Loader />;
	}

	return <App isAuthorized={personalData.isAuthorized}/>;
}

export default AppContainer;
