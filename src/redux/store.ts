import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import userReducer from "./slices/userSlice";
import logger from "redux-logger";

type RootState = ReturnType<typeof rootReducer>;

const encryptor = encryptTransform({
  secretKey: process.env.NEXT_PUBLIC_REDUX_ENCRYPT_KEY!,
  onError: function (error) {
    console.error("Encryption error:", error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    if (process.env.NODE_ENV === "development") {
      middlewares.push(logger);
    }
    return middlewares;
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
