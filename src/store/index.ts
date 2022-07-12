import { activeSheetReducer } from '@store/reducer/activeSheetReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { chapterReducer } from '@store/reducer/chapterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loaderReducer } from '@store/reducer/loaderReducer';
import { mainSettingsReducer } from '@store/reducer/mainSettingsReducer';
import { newRuleReducer } from '@store/reducer/newRuleReducer';
import { persistReducer, persistStore } from 'redux-persist';
import { personalDataReducer } from '@store/reducer/personalDataReducer';
import { sheetReducer } from '@store/reducer/sheetReducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['loaderReducer'],
};

export const routeReducer = combineReducers({
    personalDataReducer,
    newRuleReducer,
    chapterReducer,
    sheetReducer,
    mainSettingsReducer,
    activeSheetReducer,
    loaderReducer,
});

const persistedReducer = persistReducer(persistConfig, routeReducer);

export type RootState = ReturnType<typeof routeReducer>;
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
