import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk';
import exchangeSlice from "../features/exchange/exchangeSlice"
import disclaimerSlice from "../features/info/disclaimerSlice"

const rootReducer = combineReducers({
    fx: exchangeSlice,
    info: disclaimerSlice,
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