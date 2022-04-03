import { rowReducer } from '@store/reducer/rowReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loaderReducer } from '@store/reducer/loaderReducer';
import { personalDataReducer } from '@store/reducer/personalDataReducer';
import { newRuleReducer } from '@store/reducer/newRuleReducer';

export const routeReducer = combineReducers({
    loaderReducer,
    personalDataReducer,
    newRuleReducer,
    rowReducer,
});

export type RootState = ReturnType<typeof routeReducer>;
export const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(thunk)));
