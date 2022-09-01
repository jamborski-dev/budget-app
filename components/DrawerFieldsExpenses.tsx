import { useEffect, useState } from "react"
import { useFormik } from "formik"
import { useDataContext } from "../hooks/useDataContext"
import { useDrawerContext } from "../hooks/useDrawerContext"
import { renderAccountHolderNames } from "../lib/utils"

import { CurrencyInput, Input } from "./Input"
import { Select, TxRepeat } from "./Select"
import { TabStrip } from "./TabStrip"

export const DrawerFieldsExpenses = () => {
  const [APILoading, setAPILoading] = useState(false)
  const [formErrors, setFormErrors] = useState([])
  const [balanceBefore, setBalanceBefore] = useState(0)
  const [balanceAfter, setBalanceAfter] = useState(0)
  const [txDirection, setTxDirection] = useState("OUTGOING")
  const [txType, setTxType] = useState("SINGLE")

  const {
    state: { categories, selectedAccount },
    actions: { fetchTransactions, fetchAccounts }
  } = useDataContext()
  const {
    actions: { setOpen }
  } = useDrawerContext()

  useEffect(() => {
    if (!selectedAccount) return

    setBalanceBefore(selectedAccount.currentBalance)
    setBalanceAfter(selectedAccount.currentBalance)
  }, [selectedAccount])

  const handleChangeTxType = e => {
    setTxType(e.target.value)
    formik.handleChange(e)
  }

  // TODO: add Yup validation

  const formik = useFormik({
    initialValues: {
      tx_title: "",
      tx_amount: null,
      tx_repeat: "",
      tx_category: "",
      tx_type: txType
    },
    onSubmit: async values => {
      setFormErrors([])

      if (values.tx_category === "") {
        setFormErrors(prev => [...prev, "Category is required"])
      }

      if (values.tx_title === "") {
        setFormErrors(prev => [...prev, "Title is required"])
      }

      if (values.tx_title === "") {
        setFormErrors(prev => [...prev, "Title is required"])
      }

      if (formErrors.length > 0) return false

      setAPILoading(true)

      const data = {
        title: values.tx_title,
        tx_account_current_balance: balanceBefore,
        tx_amount: values.tx_amount,
        tx_account_id: selectedAccount.id,
        tx_category_id: values.tx_category,
        tx_direction: "OUTGOING",
        tx_type: values.tx_type
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
        fetchTransactions()
        fetchAccounts()
        setAPILoading(false)
      } catch (err) {
        console.info("tx api error", err)
      }
    }
  })

  if (!selectedAccount) return null

  const theme = { "--account-color": selectedAccount.color } as React.CSSProperties

  return (
    <form onSubmit={formik.handleSubmit} className="drawer-form" style={theme}>
      <h3 className="form-heading">New outgoing transaction</h3>
      <div className="tx-meta__account">
        <div className="tx-meta__account-heading">
          <div>Target Account</div>

          {/* TODO: implement switching accounts for current transaction */}
          <button type="button" className="link">
            Switch Account
          </button>
        </div>
        <strong>{renderAccountHolderNames(selectedAccount.accountHolders)}</strong>
        <div className="meta__bank">{selectedAccount.bankName}</div>
      </div>

      <fieldset className="fieldset">
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

        <TabStrip
          label="Transaction Type"
          name="tx_type"
          onChange={handleChangeTxType}
          checkedValue={formik.values.tx_type}
        />
        {formik.values.tx_type === "REPEAT" && (
          <TxRepeat
            name="tx_repeat"
            label="Transaction repeat period"
            onChange={formik.handleChange}
            value={formik.values.tx_repeat}
          />
        )}

        {/* TODO: switch select to icon grid once icon reference is resolved */}
        <Select
          label="Category"
          name="tx_category"
          onChange={formik.handleChange}
          value={formik.values.tx_category}
        >
          <option value="0">- no tag -</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.label}
            </option>
          ))}
        </Select>
      </fieldset>
      <div className="tx-summary">
        <h4 className="tx-summary__heading">Before transaction</h4>
        <p className="tx-summary__value">£{selectedAccount.currentBalance.toFixed(2)}</p>

        <h4 className="tx-summary__heading">After transaction</h4>
        <p className={`tx-summary__value ${txDirection === "INCOMING" ? "-higher" : "-lower"}`}>
          {txDirection === "INCOMING" && `£${(balanceAfter + formik.values.tx_amount).toFixed(2)}`}
          {txDirection === "OUTGOING" && `£${(balanceAfter - formik.values.tx_amount).toFixed(2)}`}
        </p>
      </div>

      {formErrors.length > 0 && (
        <div className="tx-form__notice -error">
          {formErrors.map((err, index) => (
            <div key={index}>{err}</div>
          ))}
        </div>
      )}

      {APILoading && (
        <div className="tx-form__notice -info">
          Please wait while transfering transaction data...
        </div>
      )}

      {/* TODO: add success notice + reset form */}

      <div className="btn-group">
        {/* TODO: clear form to defaults onClick cancel */}
        <button
          className="btn -cancel"
          type="button"
          onClick={() => setOpen(false)}
          disabled={APILoading}
        >
          Cancel
        </button>

        {/* TODO: close drawer on successful transaction addition */}
        <button className="btn -submit" type="submit" disabled={APILoading}>
          Submit
        </button>
      </div>
    </form>
  )
}
