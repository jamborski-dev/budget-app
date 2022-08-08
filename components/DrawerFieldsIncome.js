import { CurrencyInput, Input } from "./Input"
import { Select, TxRepeat } from "./Select"
import { useDataContext } from "../hooks/useDataContext"
import { useDrawerContext } from "../hooks/useDrawerContext"

export const DrawerFieldsIncome = () => {
  const {
    state: { tags, selectedAccount }
  } = useDataContext()
  const {
    actions: { setOpen }
  } = useDrawerContext()

  const handleOnSubmit = e => {
    e.preventDefault()
    alert("Form submitted")
  }

  return (
    <form className="drawer-form" onSubmit={handleOnSubmit}>
      <h3 className="form-heading">New incoming transaction</h3>
      <div className="tx-meta__account">
        <span>Target Account</span>
        <strong>{selectedAccount.account_holder}</strong>
        <div className="meta__bank">{selectedAccount.bank}</div>
      </div>

      <fieldset className="fieldset">
        <Input name="Title" type="text" placeholder="Shopping..." />
        <CurrencyInput name="Amount" currency="£" />

        <TxRepeat />

        {/* TODO: switch select to icon grid once icon reference is resolved */}
        <Select name="Tag">
          <option value="0">- no tag -</option>
          {tags.map((tag, index) => (
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
      <div className="btn-group">
        <button className="btn -cancel" type="button" onClick={() => setOpen(false)}>
          Cancel
        </button>
        <button className="btn -submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}
