import persistReducer from "redux-persist/lib/persistReducer";
import combineReducer from "./combineReducer";
import localStorage from "redux-persist/lib/storage";
import combineReducerLocal from "./combineReducerLocal";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
    key : "store",
    storage : sessionStorage
}

const persistConfigLocalStorage = {
    key:"localStore",
    storage : localStorage
}

export const persistedReducer = persistReducer(persistConfig,combineReducer);
export const persistedReducerLocal = persistReducer(persistConfigLocalStorage,combineReducerLocal);