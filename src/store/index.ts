import { activeSheetReducer } from '@store/reducer/activeSheetReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { chapterReducer } from '@store/reducer/chapterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loaderReducer } from '@store/reducer/loaderReducer';
import { mainSettingsReducer } from '@store/reducer/mainSettingsReducer';
import { newRuleReducer } from '@store/reducer/newRuleReducer';
import { personalDataReducer } from '@store/reducer/personalDataReducer';
import { sheetReducer } from '@store/reducer/sheetReducer';
import thunk from 'redux-thunk';

export const routeReducer = combineReducers({
    personalDataReducer,
    newRuleReducer,
    chapterReducer,
    sheetReducer,
    mainSettingsReducer,
    activeSheetReducer,
    loaderReducer,
});

export type RootState = ReturnType<typeof routeReducer>;
export const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(thunk)));
