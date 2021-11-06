import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk } from "../../store"

// TODO create rate interface/model instead of any

interface IExchangeState {
    rates: any[];

    loading: boolean;
    error?: string;
}

const initialState: IExchangeState = {
    rates: [],

    loading: false,
    error: undefined,
}

const exchangeSlice = createSlice({
    name: 'fx',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload
        },
        setFXRatesSuccess: (state, action: PayloadAction<any[]>) => {
            state.rates = action.payload
        }
    }
})

const {
    setLoading,
    setError,
    setFXRatesSuccess,
} = exchangeSlice.actions

const getRates = (): AppThunk => async (dispatch, getState) => {
    try {
        dispatch(setLoading(true))
        // api call
        const response: any[] = []
        dispatch(setFXRatesSuccess(response))
    } catch (e: any) {
        dispatch(setError(e.toString()))
    } finally {
        dispatch(setLoading(false))
    }
}

export const exchangeActions = {
    setLoading,
    setError,
    setFXRatesSuccess,
    getRates,
}

export default exchangeSlice.reducer