import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer, persistedReducerLocal } from "./persistor";
import { persistStore } from "redux-persist";


const store = configureStore({
    reducer: {
        session : persistedReducer,
        local : persistedReducerLocal
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Ignore specific actions
            ignoredActionPaths: ['payload.register'], // Ignore specific paths
            ignoredPaths: ['register'], // Ignore certain paths in state
          },
        }),
})

const persistor =  persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;

export {store,persistor};

