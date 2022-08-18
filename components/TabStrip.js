import { useState } from "react"

export const TabStrip = ({ name, label, options = [] }) => {
  const [checked, setChecked] = useState("")

  const handleRadio = value => setChecked(value)

  return (
    <div className={`form-group`}>
      <label htmlFor={name} className={`form-label`}>
        {label}
      </label>
      <div id={name} className="radio-group">
        <label
          htmlFor="single"
          className={`radio-label ${checked === "single" ? "-checked" : ""}`}
          onClick={() => handleRadio("single")}
        >
          Single
          <input
            id="single"
            name={name}
            className={`form-radio`}
            type="radio"
            readOnly
            value="single"
            checked={checked === "single" ? "checked" : ""}
          />
        </label>
        <label
          htmlFor="repeating"
          className={`radio-label ${checked === "repeating" ? "-checked" : ""}`}
          onClick={() => handleRadio("repeating")}
        >
          Repeating
          <input
            checked={checked === "repeating" ? "checked" : ""}
            readOnly
            id="repeating"
            name={name}
            value="repeating"
            className={`form-radio`}
            type="radio"
          />
        </label>
      </div>
    </div>
  )
}
