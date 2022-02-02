import React, { useEffect } from 'react';
import Loader from '@src/shared/Loader/Loader';
import App from '@src/App';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setVisibility } from '@store/reducer/loaderReducer';
import { setPersonalData } from '@store/reducer/personalDataReducer';

const AppContainer: React.FC = () => {
	const { isLoading } = useTypedSelector(state => state.loaderReducer);
	const personalDataReducer = useTypedSelector(state => state.personalDataReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setVisibility(false));
		dispatch(setPersonalData(true));
	}, []);


	if (isLoading) {
		return <Loader />;
	}

	return (
		<App
			accessiblePages={personalDataReducer.accessiblePages}
		/>
	);
}

export default AppContainer;
