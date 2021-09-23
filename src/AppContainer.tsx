import React, { useEffect } from 'react';
import Loader from '@shared/loader/Loader';
import App from '@src/App';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setVisibility } from '@store/reducer/loaderReducer';

function AppContainer() {
  const loader = useTypedSelector(state => state.loader),
        dispatch = useDispatch();
        
  //[loader, setLoader] = useState(useTypedSelector(state => state.loader));
  useEffect(() => {
    dispatch(setVisibility(!loader.loading));
  }, []);

  if(loader.loading){
    return <Loader />;
  }

  return <App />;
}

export default AppContainer;
