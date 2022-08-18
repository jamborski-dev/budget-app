import { useDrawerContext } from "../hooks/useDrawerContext"
import { useDataContext } from "../hooks/useDataContext"

export const TransactionsHeader = () => {
  const {
    actions: { setOpen }
  } = useDrawerContext()
  const {
    state: { accounts, selectedAccount }
  } = useDataContext()

  if (!accounts) return null

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
          {accounts.map((account, i) => (
            <AccountTab key={i} account={account} isActive={selectedAccount.id} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

const AccountTab = ({ account, isActive }) => {
  const {
    actions: { selectAccount }
  } = useDataContext()

  const { id, color, accountHolders, bankName, currencySymbol, currentBalance } = account

  const renderAccountHolderNames = _accountHolders =>
    _accountHolders.map(
      (holder, index) => `${holder.name}${index < accountHolders.length - 1 ? " | " : ""}`
    )

  return (
    <li
      className={`account-tabs__list-item ${isActive === id ? "-active" : ""}`}
      style={{ "--tab-color": color }}
      onClick={() => selectAccount(id)}
    >
      <div className="account-tab__name">{renderAccountHolderNames(accountHolders)}</div>
      <div className="account-tab__bank">{bankName}</div>
      <div className="account-tab__current">
        {currencySymbol}
        {currentBalance}
      </div>
    </li>
  )
}
