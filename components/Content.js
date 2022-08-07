import { useDataContext } from "../hooks/useDataContext"
import { Drawer } from "../components/Drawer"
import { ContentHeader } from "./ContentHeader"

export const Content = () => {
  const {
    state: { accounts, transactions, tags, isLoading }
  } = useDataContext()

  if (isLoading) return <div className="loading">Loading data...</div>

  const getAccount = _id => accounts.find(item => item.id === _id)
  const getTag = _id => tags.find(item => item.id === _id)

  const renderTransactions = _data => {
    return _data.map((item, index) => {
      const { account_id, date, tx_tag_id, tx_type, tx_value } = item
      const { id, account_holder, bank, currency, current_amount } = getAccount(account_id)
      const { id: tag_id, label: tag_label, color: tag_color, icon: Icon } = getTag(tx_tag_id)
      return (
        <tr key={index}>
          <td className="table__cell--date">{date}</td>
          <td className="table__cell--account">
            <span className="table__cell--account__holder">{account_holder}</span>
            <span className="table__cell--account__bank">{bank}</span>
          </td>
          <td className="table__cell--tag">
            <span className="tx-tag" style={{ backgroundColor: tag_color }}>
              {tag_label}
            </span>
          </td>
          <td className="table__cell--value">
            {tx_type === "outgoing" ? `-${tx_value}` : tx_value}
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="grid-block block__content">
      <div className="content">
        <ContentHeader />
        <table className="table">
          <thead>
            <tr>
              <td>Date</td>
              <td>Account</td>
              <td>Tag</td>
              <td className="text-right">Value</td>
            </tr>
          </thead>
          <tbody>{renderTransactions(transactions)}</tbody>
        </table>
      </div>

      <Drawer />
    </div>
  )
}
