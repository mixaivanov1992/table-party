import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { loaderReducer } from '@store/reducer/loaderReducer';
import { personalDataReducer } from '@store/reducer/personalDataReducer';
import { newRuleReducer } from '@store/reducer/newRuleReducer';

export const routeReducer = combineReducers({
    loader: loaderReducer,
    personalData: personalDataReducer,
    newRule: newRuleReducer
});

export type RootState = ReturnType<typeof routeReducer>;
export const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(thunk)));