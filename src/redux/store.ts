import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import themeReducer from './slices/themeSlice';

const encryptor = encryptTransform({
  secretKey: process.env.NEXT_PUBLIC_REDUX_ENCRYPT_KEY!,
  onError: function(error) {
    console.error('Encryption error:', error);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  // Add other reducers here as needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch