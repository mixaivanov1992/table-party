import { activeSheetReducer } from '@src/store/reducer/activeSheetReducer';
import { chapterReducer } from '@src/store/reducer/chapterReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { personalDataReducer } from '@store/reducer/personalDataReducer';
import { newRuleReducer } from '@store/reducer/newRuleReducer';
import { mainSettingsReducer } from './reducer/mainSettingsReducer';

export const routeReducer = combineReducers({
    personalDataReducer,
    newRuleReducer,
    chapterReducer,
    mainSettingsReducer,
    activeSheetReducer,
});

export type RootState = ReturnType<typeof routeReducer>;
export const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(thunk)));
