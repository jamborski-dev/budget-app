import { Account } from "@prisma/client"
import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react"

interface IDataContext {
  state: TDataContextState
  actions: TDataContextActions
}

// TODO: update types to resamble Prisma schema
interface TDataContextState {
  isLoading: boolean
  transactions: Array<any>
  accounts: Array<any>
  selectedAccount: Account
  categories: Array<any>
}

type AccountMock = {
  id: number
  account_holder: string
  bank: string
  currency_code: string
  currency_symbol: string
  current_amount: number
  account_color: string
}

type Account = {
  id: number
  bankName: string
  account_holder: string
  currentBalance: number
  transactions: Object[]
  accountHolders: Object[]
  currencyCode: string
  currencySymbol: string
  currencySymbolPosition: string
  color: string
}

interface TDataContextActions {
  setTransactions: Dispatch<SetStateAction<any[]>>
  setAccounts: Dispatch<SetStateAction<any[]>>
  setCategories: Dispatch<SetStateAction<any[]>>
  selectAccount: (_id: number) => void
}

export type TContextProps = {
  children?: React.ReactNode
}

export const DataContext = createContext<IDataContext>({
  state: {
    isLoading: false,
    transactions: [],
    accounts: [],
    selectedAccount: undefined,
    categories: []
  },
  actions: {
    setTransactions: () => {},
    setAccounts: () => {},
    selectAccount: () => {},
    setCategories: () => {}
  }
})

export const DataContextProvider = ({ children }: TContextProps) => {
  const [isLoading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [accounts, setAccounts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedAccount, setSelectedAccount] = useState<Account>()

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    fetch("/api/transactions")
      .then(res => res.json())
      .then(data => {
        setTransactions(data)
      })
      .catch(err => setErrors(err))

    fetch("/api/accounts")
      .then(res => res.json())
      .then(data => {
        setAccounts(data)
      })
      .catch(err => setErrors(err))

    fetch("/api/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
      .catch(err => setErrors(err))
  }, [])

  useEffect(() => {
    if (!categories.length || !transactions.length || !accounts.length) return

    console.log(accounts)
    setLoading(false)
  }, [categories, transactions, accounts])

  // Select first account onLoad
  useEffect(() => {
    if (!accounts.length) return

    setSelectedAccount(accounts.find(item => item.id === 1))
  }, [accounts])

  const selectAccount = (_id: number) => setSelectedAccount(accounts.find(item => item.id === _id))

  const context = {
    state: {
      isLoading,
      transactions,
      accounts,
      selectedAccount,
      categories
    },
    actions: {
      setTransactions,
      setAccounts,
      selectAccount,
      setCategories
    }
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>
}
