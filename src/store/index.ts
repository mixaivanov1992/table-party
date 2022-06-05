import { activeSheetReducer } from '@src/store/reducer/activeSheetReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { chapterReducer } from '@src/store/reducer/chapterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mainSettingsReducer } from '@store/reducer/mainSettingsReducer';
import { newRuleReducer } from '@store/reducer/newRuleReducer';
import { personalDataReducer } from '@store/reducer/personalDataReducer';
import thunk from 'redux-thunk';

export const routeReducer = combineReducers({
    personalDataReducer,
    newRuleReducer,
    chapterReducer,
    mainSettingsReducer,
    activeSheetReducer,
});

export type RootState = ReturnType<typeof routeReducer>;
export const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(thunk)));
