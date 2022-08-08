import { Input } from "./Input"
import { Select } from "./Select"
import { useDataContext } from "../hooks/useDataContext"

export const DrawerFieldsExpenses = () => {
  const {
    state: { tags }
  } = useDataContext()

  return (
    <form className="drawer-form">
      <h3 className="form-heading">New transaction</h3>
      <fieldset className="fieldset">
        <Input inputName="Title" type="text" />
        <Input inputName="Amount" type="currency" />
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
        <p className="tx-summary__value">£212.89</p>
      </div>
      <div className="btn-group">
        <button className="btn -cancel" type="submit">
          Cancel
        </button>
        <button className="btn -submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}
