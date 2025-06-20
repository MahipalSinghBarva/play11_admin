import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from './slice/userSlice';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, userSlice);

const Store = configureStore({
    reducer: {
        user: persistedReducer
    }
})

const persistor = persistStore(Store);

export { Store, persistor };