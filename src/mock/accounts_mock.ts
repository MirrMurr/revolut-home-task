import Account from "../models/account"
import Currency from "../models/currency"

const ACCOUNTS_MOCK: Account[] = Object.keys(Currency).map(currency => {
    let balance = 0

    switch (currency) {
        case Currency.GBP:
            balance = 3396.42
            break;
        case Currency.USD:
            balance = 0.13
            break;
        default:
            break;
    }

    return {
        currency,
        balance
    }
})

export default ACCOUNTS_MOCK