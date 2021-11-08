import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IDisclaimerState {
    visible: boolean;
    message: string;
}

const initialState: IDisclaimerState = {
    visible: false,
    message: "This is application uses the Free plan of the https://openexchangerates.org/api/ FX rates source api. This means that only the rates based on USD can be queried with 1000 queries / Month. The functionality of the widget would not change if the Developer plan was purchased, moreover mock data is also provided. Actual and mock data can be switched in the exchangeSlice's \"getRates\" thunk."
}

const disclaimerSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload
        },
    }
})

const {
    setVisible
} = disclaimerSlice.actions

export const disclaimerActions = {
    setVisible
}

export default disclaimerSlice.reducer