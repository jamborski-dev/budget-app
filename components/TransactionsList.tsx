import { Drawer } from "./Drawer"
import { useDataContext } from "../hooks/useDataContext"
import { TransactionsHeader } from "./TransactionsHeader"
import { TransactionsTable } from "./TransactionsTable"

export const TransactionsList = () => {
  const {
    state: { isLoading }
  } = useDataContext()

  if (isLoading)
    return <div className="loading">Please wait while loading transactions data...</div>

  return (
    <>
      <div className="content">
        <TransactionsHeader />
        <TransactionsTable />
      </div>

      <Drawer />
    </>
  )
}
