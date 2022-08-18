import { useState } from "react"
import { CurrencyInput, Input } from "./Input"
import { Select, TxRepeat } from "./Select"
import { TabStrip } from "./TabStrip"
import { useDataContext } from "../hooks/useDataContext"
import { useDrawerContext } from "../hooks/useDrawerContext"
import { useFormik } from "formik"

export const DrawerFieldsExpenses = () => {
  const {
    state: { categories, selectedAccount }
  } = useDataContext()
  const {
    actions: { setOpen }
  } = useDrawerContext()

  const [APILoading, setAPILoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      tx_title: "",
      tx_amount: "",
      tx_repeat: "",
      tx_category: ""
    },
    onSubmit: async values => {
      setAPILoading(true)

      const data = {
        title: values.tx_title,
        tx_account_current_balance: 143.63,
        tx_amount: values.tx_amount,
        tx_account_id: 1,
        tx_category_id: 1
      }

      try {
        const tx = await fetch("/api/transactions", {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: JSON.stringify(data)
        })

        const result = await tx.json()
        console.log(result)
      } catch (err) {
        console.info("tx api error", err)
      }
      await new Promise(r => setTimeout(r, 2000))
      setAPILoading(false)
    }
  })

  if (!selectedAccount) return <p>Loading...</p>

  return (
    <form onSubmit={formik.handleSubmit} className="drawer-form">
      <h3 className="form-heading">New outgoing transaction</h3>
      <div className="tx-meta__account">
        <span>Target Account</span>
        <strong>{selectedAccount.account_holder}</strong>
        <div className="meta__bank">{selectedAccount.bank}</div>
      </div>

      <fieldset className="fieldset">
        <TabStrip label="Transaction Type" name="tx_type" />
        <Input
          name="tx_title"
          label="Title"
          type="text"
          placeholder="Shopping..."
          onChange={formik.handleChange}
          value={formik.values.tx_title}
        />

        <CurrencyInput
          name="tx_amount"
          label="Amount"
          currency="£"
          placeholder={"0.00"}
          onChange={formik.handleChange}
          value={formik.values.tx_amount}
        />

        <TxRepeat
          name="tx_repeat"
          label="Transaction repeat period"
          onChange={formik.handleChange}
          value={formik.values.tx_repeat}
        />

        {/* TODO: switch select to icon grid once icon reference is resolved */}
        <Select
          label="Category"
          name="tx_category"
          onChange={formik.handleChange}
          value={formik.values.tx_category}
        >
          <option value="0">- no tag -</option>
          {categories.map((tag, index) => (
            <option key={index} value={tag.label}>
              {tag.label}
            </option>
          ))}
        </Select>
      </fieldset>
      <div className="tx-summary">
        <h4 className="tx-summary__heading">Before transaction</h4>
        <p className="tx-summary__value">£234.22</p>
        <h4 className="tx-summary__heading">After transaction</h4>
        <p className="tx-summary__value -lower">£212.89</p>
      </div>
      {APILoading && <span>Please wait while transfering transaction data...</span>}
      <div className="btn-group">
        <button
          className="btn -cancel"
          type="button"
          onClick={() => setOpen(false)}
          disabled={APILoading}
        >
          Cancel
        </button>
        <button className="btn -submit" type="submit" disabled={APILoading}>
          Submit
        </button>
      </div>
    </form>
  )
}
