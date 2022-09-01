import { format } from "date-fns"
import { useDataContext } from "../hooks/useDataContext"
import { renderAccountHolderNames, sumTxArr } from "../lib/utils"

export const StandingOrdersTable = () => {
  const {
    state: { standingOrders, accounts }
  } = useDataContext()

  if (!standingOrders) return null

  const allAccounts = standingOrders.map(item => item.accountId)
  const availableAccounts = new Set(allAccounts)
  const orders = []

  availableAccounts.forEach(accountId => {
    const items = standingOrders.filter(item => item.accountId === accountId)
    const account = accounts.find(item => item.id === accountId)
    orders.push({ account: account, items: items })
  })

  return (
    <div className="standing-orders__grid">
      {orders.map((item, i) => (
        <OrdersTable key={i} item={item} />
      ))}
    </div>
  )
}

const OrdersTable = ({ item }) => {
  if (!item) return null

  console.log(item)
  const { items, account } = item

  const rows = _items =>
    _items.map((item, i) => {
      const { amount, repeatValue, day, startDate, endDate, title } = item

      return (
        <tr key={i}>
          <td>{day}</td>
          <td>{repeatValue.label.replace(/every/gi, "").toUpperCase()}</td>
          <td>{title}</td>
          <td>{format(new Date(startDate), "dd-MM-yy")}</td>
          <td>{endDate ? format(new Date(endDate), "dd-MM-yy") : "-"}</td>
          <td className="table__cell--value">£{amount.toFixed(2)}</td>
        </tr>
      )
    })

  return (
    <div className="standing-orders__table-wrapper">
      <div className="standing-orders__account-meta">
        <div>
          <span>{renderAccountHolderNames(account.accountHolders)}</span>
          <h2 className="standing-orders__table-heading">{account.bankName}</h2>
        </div>
        <div>
          <div className="text-right">Total</div>
          <div>
            {account.currencySymbol}
            {sumTxArr(item.items, "amount")}
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>Day</td>
            <td>Period</td>
            <td>Title</td>
            <td>Start</td>
            <td>End</td>
            <td className="text-right">Amount</td>
          </tr>
        </thead>
        <tbody>{rows(items)}</tbody>
      </table>
    </div>
  )
}
