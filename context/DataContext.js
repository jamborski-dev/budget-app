import { useState, useEffect, createContext } from "react"

export const DataContext = createContext({})

export const DataContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [accounts, setAccounts] = useState([])
  const [tags, setTags] = useState([])
  const [selectedAccount, setSelectedAccount] = useState({})

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

    fetch("/api/tags")
      .then(res => res.json())
      .then(data => {
        setTags(data)
      })
      .catch(err => setErrors(err))
  }, [])

  useEffect(() => {
    if (!tags.length || !transactions.length || !accounts.length) return

    setLoading(false)
  }, [tags, transactions, accounts])

  // Select first account onLoad
  useEffect(() => {
    if (!accounts.length) return

    setSelectedAccount(accounts.find(item => item.id === 0))
    console.log("acc", selectedAccount)
  }, [accounts])

  const selectAccount = _id => setSelectedAccount(accounts.find(item => item.id === _id))

  const context = {
    state: {
      isLoading,
      transactions,
      accounts,
      selectedAccount,
      tags
    },
    actions: {
      setTransactions,
      setAccounts,
      selectAccount,
      setTags
    }
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>
}
