import ApiService from "./ApiService"
import Account from "../../models/account"

const ExchangeService = {
    getLatestRates: (base: string = 'USD') => ApiService.get('latest.json', { base }),
    postTransaction: (accounts: Account[], baseAccount: Account, baseAmount: number, exchangeAccount: Account, exchangeAmount: number): Promise<Account[]> => new Promise(resolve => {
        const responseMock = accounts.map(account => {
            if (account.currency === baseAccount.currency) {
                return { ...account, balance: account.balance + baseAmount }
            }
            if (account.currency === exchangeAccount.currency) {
                return { ...account, balance: account.balance + exchangeAmount }
            }
            return account
        })
        return setTimeout(resolve.bind(null, responseMock), 700)
    }),
}

export default ExchangeService