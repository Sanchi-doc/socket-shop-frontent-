import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authReduser';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import storageModule from "redux-persist/lib/storage";
import {productsApi} from '../redux/products/productsOperation'
import { userApi } from './user/userOperation';
import { basketSlice } from './basket/basketReduser';

const storage = storageModule.default ?? storageModule;

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
        [productsApi.reducerPath]: productsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [basketSlice.name]: basketSlice.reducer
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
           serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
           }
        }),
        productsApi.middleware,
        userApi.middleware
    ]
})

export const persistor = persistStore(store)