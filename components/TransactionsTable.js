import { useDataContext } from "../hooks/useDataContext"
import format from "date-fns/format"

export const TransactionsTable = () => {
  const {
    state: { accounts, selectedAccount, transactions, categories }
  } = useDataContext()

  const getAccount = _id => accounts.find(item => item.id === _id)
  const getCategory = _id => categories.find(item => item.id === _id)

  console.log(transactions)

  const renderTransactions = (_data, filter = item => item) => {
    return _data.filter(filter).map((item, index) => {
      const { accountId, date, category, direction, amount, balanceBefore, balanceAfter } = item
      const { id, accountHolders, bankName, currencySymbol, color } = getAccount(accountId)
      // const { id: tag_id, label: tag_label, color: tag_color, icon: Icon } = getCategory(categoryId)
      return (
        <tr key={index}>
          <td className="table__cell--date">{format(new Date(date), "ccc do MMM ''yy")}</td>
          <td className="table__cell--account">
            <span className="table__cell--account__holder">{accountHolders[0].name}</span>
            <span className="table__cell--account__bank">{bankName}</span>
          </td>
          <td className="table__cell--tag">
            <span className="tx-tag" style={{ backgroundColor: category.color }}>
              {category.label}
            </span>
          </td>
          {direction === "OUTGOING" && (
            <td className="table__cell--value -value-outgoing">
              -{currencySymbol}
              {amount.toFixed(2)}
            </td>
          )}
          {direction === "INCOMING" && (
            <td className="table__cell--value -value-incoming">
              {currencySymbol}
              {amount.toFixed(2)}
            </td>
          )}
          <td className="table__cell--value">
            {currencySymbol}
            {balanceBefore.toFixed(2)}
          </td>
          <td className="table__cell--value">
            {currencySymbol}
            {balanceAfter.toFixed(2)}
          </td>
          ∂
        </tr>
      )
    })
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Date</td>
          <td>Account</td>
          <td>Category</td>
          <td className="text-right">Amount</td>
          <td className="text-right">Balance Before</td>
          <td className="text-right">Balance After</td>
        </tr>
      </thead>
      <tbody>
        {renderTransactions(transactions, item => item.accountId === selectedAccount.id)}
      </tbody>
    </table>
  )
}
