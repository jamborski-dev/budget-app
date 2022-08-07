import { useState, useEffect, createContext } from "react"

export const DataContext = createContext({})

export const DataContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [accounts, setAccounts] = useState([])
  const [tags, setTags] = useState([])

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
  }, [])

  useEffect(() => {
    fetch("/api/accounts")
      .then(res => res.json())
      .then(data => {
        setAccounts(data)
      })
      .catch(err => setErrors(err))
  }, [])

  useEffect(() => {
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

  const context = {
    state: {
      transactions,
      accounts,
      tags,
      isLoading
    },
    actions: {
      setTransactions,
      setAccounts,
      setTags
    }
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>
}
