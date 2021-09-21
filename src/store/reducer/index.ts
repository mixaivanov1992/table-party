import { combineReducers } from 'redux';
import { loaderReducer } from '@store/reducer/loaderReducer';

export const routeReducer = combineReducers({
    loader: loaderReducer
});

export type RootState = ReturnType<typeof routeReducer>;