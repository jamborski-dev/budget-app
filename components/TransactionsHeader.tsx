import { useDrawerContext } from "../hooks/useDrawerContext"
import { useDataContext } from "../hooks/useDataContext"
import { AccountTab } from "./AccountTab"

export const TransactionsHeader = () => {
  const {
    actions: { setOpen }
  } = useDrawerContext()
  const {
    state: { accounts, selectedAccount }
  } = useDataContext()

  if (!accounts || !selectedAccount) return null

  const date = new Date()
  const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

  return (
    <header className="content-header">
      <div className="content-header__meta">
        <div className="content-header__meta-info">
          <h3 className="content-header__meta--heading">Transactions</h3>
          <div className="content-header__meta--date">{today}</div>
        </div>
        <div className="content-header__meta-tools">
          <button className="btn" onClick={() => setOpen(true)}>
            Add Transaction
          </button>
        </div>
      </div>
      <nav className="account-tabs">
        <ul className="account-tabs__list">
          {accounts
            .sort((a, b) => a.id - b.id)
            .map((account, i) => (
              <AccountTab key={i} account={account} isActive={selectedAccount.id} />
            ))}
        </ul>
      </nav>
    </header>
  )
}
