import { useState, useEffect, createContext } from "react"
import { fetchApi } from "../lib/utils"

import type { IDataContext, TContextProps } from "./DataContext.types"
import type { TAccount } from "../types/app.types"

export const DataContext = createContext<IDataContext>({
  state: {
    isLoading: false,
    transactions: [],
    standingOrders: [],
    accounts: [],
    categories: [],
    selectedAccount: undefined
  },
  actions: {
    selectAccount: () => {},
    fetchTransactions: () => {},
    fetchCategories: () => {},
    fetchStandingOrders: () => {},
    fetchAccounts: () => {}
  }
})

export const DataContextProvider = ({ children }: TContextProps) => {
  const [isLoading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [standingOrders, setStandingOrders] = useState([])
  const [accounts, setAccounts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedAccount, setSelectedAccount] = useState<TAccount>()

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    fetchTransactions()
    fetchAccounts()
    fetchCategories()
    fetchStandingOrders()

    setLoading(false)
  }, [])

  // Select first account on first load
  useEffect(() => {
    if (!accounts.length) return
    if (selectedAccount) return

    setSelectedAccount(accounts.find(item => item.id === 1))
  }, [accounts])

  const selectAccount = (_id: number) => setSelectedAccount(accounts.find(item => item.id === _id))

  const fetchTransactions = async () => fetchApi("/api/transactions", setTransactions, setErrors)
  const fetchAccounts = async () => fetchApi("/api/accounts", setAccounts, setErrors)
  const fetchCategories = async () => fetchApi("/api/categories", setCategories, setErrors)
  const fetchStandingOrders = async () =>
    fetchApi("/api/standing-orders", setStandingOrders, setErrors)

  const context = {
    state: {
      isLoading,
      transactions,
      standingOrders,
      accounts,
      selectedAccount,
      categories
    },
    actions: {
      selectAccount,
      fetchTransactions,
      fetchAccounts,
      fetchCategories,
      fetchStandingOrders
    }
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>
}
