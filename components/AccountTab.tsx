import { CSSProperties } from "react"
import { useDataContext } from "../hooks/useDataContext"
import { renderAccountHolderNames } from "../lib/utils"

export const AccountTab = ({ account, isActive }) => {
  const {
    actions: { selectAccount }
  } = useDataContext()

  const { id, color, accountHolders, bankName, currencySymbol, currentBalance } = account
  const tabColor = { "--tab-color": color } as CSSProperties

  return (
    <li
      className={`account-tabs__list-item ${isActive === id ? "-active" : ""}`}
      style={tabColor}
      onClick={() => selectAccount(id)}
    >
      <div className="account-tab__name">{renderAccountHolderNames(accountHolders)}</div>
      <div className="account-tab__bank">{bankName}</div>
      <div className="account-tab__current">
        {currencySymbol}
        {currentBalance.toFixed(2)}
      </div>
    </li>
  )
}
