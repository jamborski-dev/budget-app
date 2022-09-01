import { useState } from "react"

export const TabStrip = ({ name, label, checkedValue = "", options = [], onChange }) => {
  const [checked, setChecked] = useState(checkedValue)

  const handleRadio = (value: string) => setChecked(value)

  // TODO: refactor to use dynamic

  return (
    <div className={`form-group`}>
      <label htmlFor={name} className={`form-label`}>
        {label}
      </label>
      <div id={name} className="radio-group">
        <label
          htmlFor="SINGLE"
          className={`radio-label ${checked === "SINGLE" ? "-checked" : ""}`}
          onClick={() => handleRadio("SINGLE")}
        >
          Single
          <input
            id="SINGLE"
            name={name}
            className={`form-radio`}
            type="radio"
            readOnly
            value="SINGLE"
            onChange={onChange}
            checked={checked === "SINGLE" ? true : false}
          />
        </label>
        <label
          htmlFor="REPEAT"
          className={`radio-label ${checked === "REPEAT" ? "-checked" : ""}`}
          onClick={() => handleRadio("REPEAT")}
        >
          Repeating
          <input
            checked={checked === "REPEAT" ? true : false}
            readOnly
            id="REPEAT"
            name={name}
            value="REPEAT"
            onChange={onChange}
            className={`form-radio`}
            type="radio"
          />
        </label>
      </div>
    </div>
  )
}
