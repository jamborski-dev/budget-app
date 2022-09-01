import { useState } from "react"
import { Input, InputsRow } from "../components/Input"
import { Select } from "../components/Select"

const SettingsPage = () => {
  const [APILoading, setAPILoading] = useState(false)

  return (
    <div className="page-content settings">
      <h2>Settings Page</h2>
      <form className="form">
        <h3 className="form-heading">Avarage costs of living</h3>
        <p className="settings-page__text">
          Here you can set avarage values per category. This will be then used to create detailed
          financial forecast.
        </p>
        <div className="btn-group">
          <button className="btn -cancel" type="button" onClick={() => {}} disabled={APILoading}>
            Cancel
          </button>

          <button className="btn -submit" type="submit" disabled={APILoading}>
            Submit
          </button>
        </div>
        <fieldset className="fieldset">
          <AvarageRow />
          <AvarageRow />
        </fieldset>
        <div className="btn-group">
          <button className="btn" type="button" onClick={() => {}} disabled={APILoading}>
            + Add Category Average
          </button>
        </div>
      </form>
    </div>
  )
}

export default SettingsPage

const AvarageRow = () => {
  return (
    <>
      <h4 className="form-heading">Bills</h4>
      <InputsRow>
        <Input
          name="field_2"
          label="Field 2"
          type="text"
          placeholder="Field 2"
          onChange={() => {}}
        />
        <Select label="Field 2 Select" name="field_2_select">
          <option>option 1</option>
          <option>option 2</option>
        </Select>
        <button className="btn -cancel" type="button" onClick={() => {}}>
          -
        </button>
      </InputsRow>
    </>
  )
}
