import { Drawer } from "../components/Drawer"
import { useDataContext } from "../hooks/useDataContext"
import { TransactionsHeader } from "./TransactionsHeader"
import { TransactionsTable } from "./TransactionsTable"

export const Content = () => {
  const {
    state: { isLoading }
  } = useDataContext()
  if (isLoading) {
    return <div className="loading">Please wait while loading transactions data...</div>
  }

  return (
    <div className="grid-block block__content">
      <div className="content">
        <TransactionsHeader />
        <TransactionsTable />
      </div>

      <Drawer />
    </div>
  )
}
