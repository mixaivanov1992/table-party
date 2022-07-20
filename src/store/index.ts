import { applyMiddleware, combineReducers, createStore } from 'redux';
import { chapterReducer } from '@store/reducer/chapterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loaderReducer } from '@store/reducer/loaderReducer';
import { messageReducer } from '@store/reducer/messageReducer';
import { newRuleReducer } from '@store/reducer/newRuleReducer';
import { persistReducer, persistStore } from 'redux-persist';
import { personalDataReducer } from '@store/reducer/personalDataReducer';
import { sheetReducer } from '@store/reducer/sheetReducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['loaderReducer', 'messageReducer'],
};

export const routeReducer = combineReducers({
    personalDataReducer,
    newRuleReducer,
    chapterReducer,
    sheetReducer,
    loaderReducer,
    messageReducer,
});

const persistedReducer = persistReducer<RootState, any>(persistConfig, routeReducer);

export type RootState = ReturnType<typeof routeReducer>;
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
