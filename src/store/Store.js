import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from './slice/userSlice';
import contestReducer from './slice/contestSlice';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, userSlice);

const Store = configureStore({
    reducer: {
        user: persistedReducer,
        contest: contestReducer
    }
})

const persistor = persistStore(Store);

export { Store, persistor };