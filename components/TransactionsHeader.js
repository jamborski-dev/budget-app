import { useDrawerContext } from "../hooks/useDrawerContext"
import { useDataContext } from "../hooks/useDataContext"

export const TransactionsHeader = () => {
  const {
    actions: { setOpen }
  } = useDrawerContext()
  const {
    state: { accounts, selectedAccount }
  } = useDataContext()

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

  return (
    <li
      className={`account-tabs__list-item ${isActive === account.id ? "-active" : ""}`}
      style={{ "--tab-color": account.account_color }}
      onClick={() => selectAccount(account.id)}
    >
      <div className="account-tab__name">{account.account_holder}</div>
      <div className="account-tab__bank">{account.bank}</div>
      <div className="account-tab__current">
        {account.currency_symbol}
        {account.current_amount}
      </div>
    </li>
  )
}
