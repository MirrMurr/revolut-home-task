import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk } from "../../store"
import Account from "../../models/account"
import Currency from "../../models/currency"
import ExchangeService from "../../services/api/ExchangeService"
import RATES_USD_MOCK from "../../mock/rates_usd_mock"
import ACCOUNTS_MOCK from "../../mock/accounts_mock"
import Rates from "../../models/rates"

// TODO create rate interface/model instead of any

interface IExchangeState {
    rates: Rates;
    accounts: Account[];
    baseCurrency: Currency;

    loading: boolean;
    error?: string;
}

const initialState: IExchangeState = {
    rates: RATES_USD_MOCK, // {}
    accounts: ACCOUNTS_MOCK, // []
    baseCurrency: Currency.USD,

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
        setBaseCurrency: (state, action: PayloadAction<Currency>) => {
            state.baseCurrency = action.payload
            state.error = undefined
        },
        setFXRatesSuccess: (state, action: PayloadAction<{}>) => {
            state.rates = action.payload
        },
        updateAccounts: (state, action: PayloadAction<Account[]>) => {
            state.accounts = action.payload
        },
    }
})

const {
    setLoading,
    setError,
    setBaseCurrency,
    setFXRatesSuccess,
    updateAccounts,
} = exchangeSlice.actions

const getRates = (base: string): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        console.log('Getting rates...')

        /// =======
        // dispatch(setFXRatesSuccess(RATES_USD_MOCK))
        /// +++++++
        const response: any = await ExchangeService.getLatestRates(base)
        dispatch(setFXRatesSuccess(response.rates))
        /// =======
    } catch (e: any) {
        dispatch(setError(e.toString()))
    } finally {
        dispatch(setLoading(false))
    }
}

const transaction = (baseAccount: Account, baseAmount: number, exchangeAccount: Account, exchangeAmount: number): AppThunk => async (dispatch, getState) => {
    const { accounts } = getState().fx // would not need if real BE existed
    try {
        dispatch(setLoading(true))
        const response: Account[] = await ExchangeService.postTransaction(accounts, baseAccount, baseAmount, exchangeAccount, exchangeAmount)
        dispatch(updateAccounts(response))
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
    setBaseCurrency,
    updateAccounts,
    getRates,
    transaction,
}

export default exchangeSlice.reducer