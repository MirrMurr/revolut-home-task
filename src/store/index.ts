import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk';
import exchangeSlice from "../features/exchange/exchangeSlice"

const rootReducer = combineReducers({
    fx: exchangeSlice,
})

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;